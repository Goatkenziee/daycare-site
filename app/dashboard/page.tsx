import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to your Dashboard!</h2>
      <p className="text-lg text-gray-600">You are signed in.</p>
    </div>
  );
