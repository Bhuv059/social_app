"use client";
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="mt-4">
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>

      <SignedIn ng-show={handleReload}>
        <UserButton />
      </SignedIn>
      <ModeToggle />
    </div>
  );
}
