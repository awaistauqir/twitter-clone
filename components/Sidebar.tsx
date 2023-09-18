"use client";
import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";

function Sidebar() {
  const { data: session } = useSession();
  console.log(session);
  const username = session?.user?.name
    ?.split(" ")
    .join("_")
    .toLocaleLowerCase();
  return (
    <div className="hidden sm:flex sm:flex-col py-5 justify-between sm:flex-0.15 md:flex-0.2 sticky h-[100vh] top-0">
      <div className="flex justify-start items-start flex-col">
        <Image
          src="/x.png"
          alt="main-logo"
          height={50}
          width={50}
          className="object-contain hoverEffect flex items-start"
        />

        {/* Menu */}
        <div className="space-y-2 py-4">
          <SidebarMenuItem text="Home" Icon={HomeIcon} active />
          <SidebarMenuItem text="Explore" Icon={HashtagIcon} active={false} />
          {session?.user && (
            <>
              <SidebarMenuItem
                text="Notifications"
                Icon={BellIcon}
                active={false}
              />
              <SidebarMenuItem
                text="Messages"
                Icon={InboxIcon}
                active={false}
              />
              <SidebarMenuItem
                text="Bookmarks"
                Icon={BookmarkIcon}
                active={false}
              />
              <SidebarMenuItem
                text="Lists"
                Icon={ClipboardIcon}
                active={false}
              />
              <SidebarMenuItem text="Profile" Icon={UserIcon} active={false} />
              <SidebarMenuItem
                text="More"
                Icon={EllipsisHorizontalCircleIcon}
                active={false}
              />
            </>
          )}
        </div>
        {/* Button */}
        {session?.user ? (
          <button className="btn-primary">Post</button>
        ) : (
          <Link href={"/sign-in"} className="btn-primary">
            {" "}
            Sign in{" "}
          </Link>
        )}
      </div>
      {/* Profile button */}
      <div className="hoverEffect text-gray-700 flex items-center justify-between w-full">
        <div className="flex gap-1 items-center justify-center">
          <img
            src={session?.user?.image ?? "/x.png"}
            alt=""
            className="rounded-full h-9 w-11 p-0"
          />

          <div className="flex-col justify-start text-xs hidden xl:flex">
            <h4 className="font-bold">{session?.user?.name ?? "Not Logged"}</h4>
            <span className="text-gray-600">
              @{session?.user ? session.user.username : "test_user"}
            </span>
          </div>
        </div>
        <EllipsisHorizontalIcon className="h-5 hidden xl:inline" />
      </div>
    </div>
  );
}

export default Sidebar;
