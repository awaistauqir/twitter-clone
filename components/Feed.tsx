"use client";
import { SparklesIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import { Post as PostType } from "@/interfaces";

function Feed() {
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        let fetechedData = snapshot.docs.map((doc) => {
          console.log(doc);
          return { id: doc.id, ...doc.data() };
        });
        setPosts(fetechedData);
        console.log(fetechedData);
      }
    );
  }, []);
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
