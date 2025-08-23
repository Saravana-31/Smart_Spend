"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, PieChart, TrendingUp, Zap, Shield, Target, MessageSquare } from "lucide-react"
import Link from "next/link"
import { auth, provider } from "@/lib/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export default function LandingPage() {
    const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result.user);
      // You can redirect to dashboard
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S+</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SmartSpend+</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
          </nav>
          
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Link href="/dashboard">
          <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
            Try Free
          </Button>
        </Link>
        <Button
          size="lg"
          variant="outline"
          className="px-8 py-3 rounded-xl border-2 bg-transparent"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </Button></div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
          <Zap className="w-3 h-3 mr-1" />
          AI-Powered Finance
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Master Your Money with{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            AI Insights
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your financial future with intelligent spending analysis, predictive budgeting, and personalized
          recommendations powered by advanced AI - designed for Indian users.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-xl"
            >
              Try Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="px-8 py-3 rounded-xl border-2 bg-transparent">
            Sign in with Google
          </Button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="SmartSpend+ Dashboard Preview"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Feature Preview Sections */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Financial Management</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the future of personal finance with AI-driven insights and automated optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* AI Auto-Categorization */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">AI Auto-Categorization</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Automatically categorize transactions with 95% accuracy using advanced machine learning algorithms.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Budgeting Assistant */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-50 to-teal-50">
            <CardHeader>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle className="text-lg">Budgeting Assistant</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Smart budget recommendations and real-time spending alerts to keep you on track.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Life Simulation */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Life Simulation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Simulate major life events and see their financial impact before making decisions.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Visual Expense Diary */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle className="text-lg">Visual Expense Diary</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Beautiful visualizations and mood tracking to understand your spending patterns.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI Features Showcase */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-100 text-emerald-700">
                <MessageSquare className="w-3 h-3 mr-1" />
                AI Assistant
              </Badge>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Your Personal Finance AI Coach</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Get instant answers to complex financial questions tailored for Indian financial planning
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Receive personalized spending recommendations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Plan for major purchases and life events</p>
                </div>
              </div>
              <Link href="/dashboard">
                <Button className="mt-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="AI Assistant Interface"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Bank-Level Security</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Your financial data is protected with 256-bit encryption, multi-factor authentication, and compliance with
            industry security standards.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span>SOC 2 Compliant</span>
            <span>256-bit Encryption</span>
            <span>GDPR Compliant</span>
            <span>PCI DSS Level 1</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S+</span>
                </div>
                <span className="text-xl font-bold">SmartSpend+</span>
              </div>
              <p className="text-gray-400">AI-powered personal finance management for the modern world.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SmartSpend+. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
