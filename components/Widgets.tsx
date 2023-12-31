"use client";
import { Article, User } from "@/interfaces";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import News from "./News";
type Props = {
  articles: Array<Article>;
  randomUsers: Array<User>;
};

export default function Widgets({ articles, randomUsers }: Props) {
  const [articleNum, setArticleNum] = useState(3);
  const [randomUserNum, setRandomUserNum] = useState(3);

  return (
    <div className="lg:flex-[0.3] hidden lg:inline space-y-5">
      <div className="w-[90%] sticky top-0 bg-white py-1.5 z-50">
        <div className="flex items-center p-3 rounded-full bg-red-300 relative">
          <MagnifyingGlassCircleIcon className="h-5 z-50 text-gray-500" />
          <input
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100 "
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] flex flex-col">
        <h4 className="font-bold text-xl px-4 mb-3">What's happening</h4>
        {articles.slice(0, articleNum).map((article: Article) => (
          <News key={article.title} article={article} />
        ))}
        <button
          onClick={() => setArticleNum(articleNum + 3)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        >
          Show more
        </button>
      </div>
      {/* Random Users section */}
      <div className="text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl max-w-full ">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        {randomUsers.slice(0, randomUserNum).map((randomUser) => (
          <div
            key={randomUser.login.uuid}
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
          >
            <img
              className="rounded-full"
              width="40"
              src={randomUser.picture.thumbnail}
              alt=""
            />
            <div className="truncate ml-4 leading-5">
              <h4 className="font-bold hover:underline text-xs truncate">
                {randomUser.login.username}
              </h4>
              <h5 className="text-xs text-gray-500 truncate">
                {randomUser.name.first + " " + randomUser.name.last}
              </h5>
            </div>
            <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
              Follow
            </button>
          </div>
        ))}
        <button
          onClick={() => setRandomUserNum(randomUserNum + 3)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        >
          Show more
        </button>
      </div>
    </div>
  );
}
