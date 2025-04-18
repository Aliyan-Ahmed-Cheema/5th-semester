"use client";

import { useSession } from "next-auth/react";

const TopHeader = () => {
  const { data: session } = useSession();

  return (
    <div className="border-b border-border-primary h-[68.5px] lg:flex hidden items-center px-8">
      <h1 className="text-lg font-medium">
        Welcome Back, {session?.user.name}
      </h1>
    </div>
  );
};

export default TopHeader;
