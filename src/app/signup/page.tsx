"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasword, setConfirmPassword] = useState("")
  const router = useRouter();

  const handleSignup = async () => {
    try {
        if(password !== confirmPasword) {
            return toast.error("Passwords do not match");
        }
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful");
      router.push("/login");
    } catch (error: any) {
      alert("Error signing up: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center bg-gray-100">
        <h1 className="text-5xl font-black">GENPATH</h1>
  <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
    
    <input
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
      className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    
    <input
      placeholder="Password"
      type="password"
      onChange={(e) => setPassword(e.target.value)}
      className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <input
  placeholder="Confirm Password"
  type="password"
  onChange={(e) => setConfirmPassword(e.target.value)}
  className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
/>
    <button
      onClick={handleSignup}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
    >
      Sign Up
    </button>
  </div>
</div>
  );
}
