import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">Welcome to Our Daycare Center!</h1>
      <p className="text-xl text-gray-700 mb-12 max-w-2xl text-center">
        Providing a safe, nurturing, and fun environment for your children to learn and grow.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <Link href="/sign-in">
          <button className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            Sign In
          </button>
        </Link>
        <Link href="/sign-up">
          <button className="px-10 py-4 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
