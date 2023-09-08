import { SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";
import Input from "./Input";

function Feed() {
  return (
    <div className="h-[200vh] flex-[.5] border-x-slate-200 border-x-2">
      <div className="flex sticky top-0 justify-between items-center p-3 z-40">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverEffect p-2 rounded-full flex justify-center items-center">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
    </div>
  );
}

export default Feed;
