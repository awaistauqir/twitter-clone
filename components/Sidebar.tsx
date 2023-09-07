import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
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
          <SidebarMenuItem
            text="Notifications"
            Icon={BellIcon}
            active={false}
          />
          <SidebarMenuItem text="Messages" Icon={InboxIcon} active={false} />
          <SidebarMenuItem
            text="Bookmarks"
            Icon={BookmarkIcon}
            active={false}
          />
          <SidebarMenuItem text="Lists" Icon={ClipboardIcon} active={false} />
          <SidebarMenuItem text="Profile" Icon={UserIcon} active={false} />
          <SidebarMenuItem
            text="More"
            Icon={EllipsisHorizontalCircleIcon}
            active={false}
          />
        </div>
        {/* Button */}
        <button className="bg-blue-400 rounded-full w-56 h-12 text-white font-bold shadow-md hover:brightness-95 text-lg hidden xl:block">
          Post
        </button>
      </div>
      {/* Profile button */}
      <div className="hoverEffect text-gray-700 flex items-center justify-between w-full">
        <div className="flex gap-1 items-center justify-center">
          <Image
            src={"/x.png"}
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />

          <div className="flex-col justify-start text-xs hidden xl:flex">
            <h4 className="font-bold">Awais Tauqir</h4>
            <span className="text-gray-600">@user_name</span>
          </div>
        </div>
        <EllipsisHorizontalIcon className="h-5 hidden xl:inline" />
      </div>
    </div>
  );
}

export default Sidebar;
