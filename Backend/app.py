import os
import uuid
import logging
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# In-memory conversation history
conversation_history = {}

# System prompts for different personalities
PERSONALITY_PROMPTS = {
    "strict_mentor": "You are a Strict Mentor AI Financial Coach. Provide direct, goal-focused advice on finances, spending, and budgeting. Be concise, tough, and emphasize discipline without encouragement.",
    "friendly_friend": "You are a Friendly Friend AI Financial Coach. Provide supportive, encouraging advice on finances, spending, and budgeting. Be warm, empathetic, and motivational.",
    "zen_coach": "You are a Zen Coach AI Financial Coach. Provide calm, mindful advice on finances, spending, and budgeting. Focus on balance, reflection, and long-term peace of mind.",
    "default": "You are an AI Financial Coach. Help users understand spending, plan budgets, and achieve financial goals with personalized insights."
}

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    logger.debug(f"Received request data: {data}")

    user_message = data.get('message')
    personality = data.get('personality', 'default')
    session_id = data.get('session_id', str(uuid.uuid4()))

    if not user_message:
        logger.error("No message provided in request")
        return jsonify({"error": "No message provided", "session_id": session_id}), 400

    # Get or initialize conversation history
    if session_id not in conversation_history:
        conversation_history[session_id] = []

    # Get system prompt
    system_prompt = PERSONALITY_PROMPTS.get(personality, PERSONALITY_PROMPTS["default"])

    # Build messages with history
    messages = [
        {"role": "system", "content": system_prompt},
        *conversation_history[session_id],
        {"role": "user", "content": user_message}
    ]

    try:
        # Mock response for debugging
        ai_response = f"Mock response for: {user_message} (Personality: {personality})"
        logger.debug(f"Generated response: {ai_response}")

        # Update conversation history
        conversation_history[session_id].append({"role": "user", "content": user_message})
        conversation_history[session_id].append({"role": "assistant", "content": ai_response})

        # Limit history to last 20 messages
        if len(conversation_history[session_id]) > 20:
            conversation_history[session_id] = conversation_history[session_id][-20:]

        return jsonify({"response": ai_response, "session_id": session_id})

    except Exception as e:
        logger.error(f"Error in processing: {str(e)}", exc_info=True)
        return jsonify({"error": f"Server error: {str(e)}", "session_id": session_id}), 500

@app.route('/api/clear_history', methods=['POST'])
def clear_history():
    data = request.json
    session_id = data.get('session_id')

    if not session_id or session_id not in conversation_history:
        logger.error(f"Invalid or missing session ID: {session_id}")
        return jsonify({"error": "Invalid or missing session ID"}), 400

    conversation_history[session_id] = []
    logger.info(f"Cleared conversation history for session: {session_id}")
    return jsonify({"message": "Conversation history cleared"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)