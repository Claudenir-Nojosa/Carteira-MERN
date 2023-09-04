"use client"
import HomePage from "@/components/HomePage";
import AuthGuard from "@/components/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <AuthGuard router={router}>
      <HomePage />
    </AuthGuard>
  );
}
