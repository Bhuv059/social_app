"use server";

import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function syncUser() {
  try {
    const user = await currentUser();
    // Check for current logged in clerk user
    if (!user) {
      return null;
    }
    // Check if the user is already in the database
    const loggedInUser = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });

    // If user is in database, return user
    if (loggedInUser) {
      return loggedInUser;
    }

    // If not in database, create new user
    const newUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        name: `${user.firstName || ""}  ${user.lastName || ""}`,
        username:
          user.username ?? user.emailAddresses[0].emailAddress.split("@")[0],
        email: user.emailAddresses[0].emailAddress,
        image: user.imageUrl,
      },
    });

    return newUser;
  } catch (error) {
    throw new Error("User Sync Error");
  }
}
