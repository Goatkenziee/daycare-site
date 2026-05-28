import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-600">Daycare Site</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <UserButton afterSignOutUrl="/" />
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow text-center px-4 mt-20">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Welcome to Our Daycare!</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl">
          Providing a nurturing and stimulating environment for your children to learn and grow.
        </p>
        <div className="space-x-4">
          <Link href="/sign-up" className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Get Started
          </Link>
          <Link href="/sign-in" className="bg-gray-300 text-gray-800 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-400 transition duration-300">
            Sign In
          </Link>
        </div>
      </main>

      <footer className="w-full bg-white shadow-md py-4 px-6 text-center text-gray-600 mt-auto">
        &copy; {new Date().getFullYear()} Daycare Site. All rights reserved.
      </footer>
    </div>
  );
}