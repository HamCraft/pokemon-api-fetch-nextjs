"use client";
import Link from "next/link";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const Navigation = () => {
  
  return (
    <nav className="flex justify-between p-4 bg-black text-white text-3xl">
      <Link
        href="/"
        className="text-white"
      >
        Home
      </Link>
      <button className="bg-slate-200 text-black rounded-sm hover:bg-slate-400">
      <SignedOut>
        <SignInButton mode="modal"/>
      </SignedOut>
      </button>
      <SignedIn>
        <UserButton />
      </SignedIn>
    
    </nav>
  );
};