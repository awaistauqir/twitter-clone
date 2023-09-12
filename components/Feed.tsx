import { SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";
import Input from "./Input";
import Post from "./Post";

function Feed() {
  const posts = [
    {
      id: "1",
      name: "Sahand Ghavidel",
      username: "codewithsahand",
      userImage: "https://www.adscientificindex.com/pictures/0b/50734.jpg",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      tweet: "nice view!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Sahand Ghavidel",
      username: "codewithsahand",
      userImage: "https://www.adscientificindex.com/pictures/0b/50734.jpg",
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
      tweet: "wow!",
      timestamp: "2 days ago",
    },
  ];
  return (
    <div className="h-[200vh] flex-[1] lg:flex-[.6] border-x-slate-200 border-x-2">
      <div className="flex sticky top-0 justify-between items-center p-3 z-40 bg-white shadow-md border-gray-300">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverEffect p-2 rounded-full flex justify-center items-center">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
}

export default Feed;
