interface PostInterface {
  post: {
    id: string;
    name: string;
    username: string;
    userImage: string;
    image: string;
    tweet: string;
    timestamp: string;
  };
}
import {
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/solid";

export default function Post({ post }: PostInterface) {
  return (
    <div className="p-3 cursor-pointer border-b border-gray-200">
      {/* user image */}
      {/* right side */}

      {/* Header */}

      <div className="w-full flex items-start flex-col sm:space-y-2 sm:mb-2">
        {/* post user info */}

        <div className="w-full flex justify-between items-center">
          <div className="flex items-center justify-center space-x-1 xl:space-x-2">
            <img
              className="h-9 w-9 rounded-full sm:h-11 sm:w-11"
              src={post.userImage}
              alt="user-img"
            />
            <div className="flex flex-col justify-start sm:space-y-1 xl:space-y-2">
              {/* Name and User Name */}
              <div className="flex space-x-1">
                <h4 className="font-bold text-xs sm:text-[16px] hover:underline">
                  {post.name}
                </h4>
                <span className="text-xs sm:text-[15px] text-gray-500">
                  @{post.username}
                  {" -"}
                </span>
                <span className="text-xs sm:text-[15px] hover:underline text-gray-500">
                  {post.timestamp}
                </span>
              </div>
              {/* post text */}
              <p className="text-gray-800 text-xs sm:text-[16px] mb-2">
                {post.tweet}
              </p>
            </div>
          </div>
          <EllipsisHorizontalIcon className="h-5 hoverEffect w-5 sm:h-11 sm:w-11 hover:bg-sky-100 hover:text-sky-500 sm:px-2" />

          {/* dot icon */}
        </div>
      </div>

      {/* post image */}

      <img className="rounded-2xl mr-2" src={post.image} alt="" />

      {/* icons */}

      <div className="flex justify-between text-gray-500 p-2">
        <ChatBubbleOvalLeftEllipsisIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
        <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
        <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
      </div>
    </div>
  );
}
