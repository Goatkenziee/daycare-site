import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server"; // Corrected import path for auth
import { redirect } from "next/navigation";
import Link from "next/link";

export default function HomePage() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-4xl flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-lg mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">DaycareConnect</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/sign-in" className="text-lg font-medium text-blue-600 hover:text-blue-800 transition duration-300">
                Sign In
              </Link>
            </li>
            <li>
              <Link href="/sign-up" className="text-lg font-medium text-purple-600 hover:text-purple-800 transition duration-300">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center text-center max-w-2xl">
        <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">Seamless Daycare Management for Parents & Providers</h2>
        <p className="text-xl text-gray-600 mb-8">
          Simplify your daily routines, connect with your daycare, and stay updated on your child's activities with ease.
        </p>
        <div className="flex space-x-4">
          <Link href="/sign-up" className="px-8 py-3 bg-blue-600 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
            Get Started
          </Link>
          <Link href="/about" className="px-8 py-3 bg-white text-blue-600 text-xl font-semibold rounded-full shadow-lg border border-blue-600 hover:bg-blue-50 transition duration-300 transform hover:scale-105">
            Learn More
          </Link>
        </div>
      </main>

      <footer className="mt-16 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} DaycareConnect. All rights reserved.
      </footer>
    </div>
  );
}