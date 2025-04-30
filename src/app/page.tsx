"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

export type LoginInputs = {
  nickname: string;
  password: string;
};

export default async function Home() {
  const router = useRouter();

  const { data: session, status } = useSession();

  if (session) {
    redirect('/dashboard')
  } else {
    redirect('/login')
  }

  return (
    <div>
      
    </div>
  );
}
