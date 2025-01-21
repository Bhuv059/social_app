"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <SignedOut>
        <SignInButton mode="modal">Sign in</SignInButton>
      </SignedOut>

      <SignedIn ng-show={handleReload}>
        <UserButton />
      </SignedIn>
    </div>
  );
}
