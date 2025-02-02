import { resolve } from "path";
import React from "react";

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // this will show the loading page for 3 sec

  return (
    <div>
      <p>{params.username}</p>
    </div>
  );
};

export default ProfilePage;
