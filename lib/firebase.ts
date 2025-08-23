// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg27xDfWu-UrDYTL-_r9hUrESGzvUsJ-g",
  authDomain: "smartspend-c64e3.firebaseapp.com",
  projectId: "smartspend-c64e3",
  storageBucket: "smartspend-c64e3.appspot.com",
  messagingSenderId: "776806332649",
  appId: "1:776806332649:web:609f9eb4de49d2baea9878",
  measurementId: "G-TPW55J6ZGJ"
};

// Avoid re-initializing in hot-reload
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Optional analytics
let analytics: any = null;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}

// Export Firebase services
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
