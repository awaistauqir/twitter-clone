import { Article } from "@/interfaces";
interface Props {
  article: Article;
}

export default function News({ article }: Props) {
  return (
    <a href={article.url} target="_blank">
      <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200 w-max-full">
        <div className="space-y-0.5">
          <h6 className="text-sm font-bold text-ellipsis">{article.title}</h6>
          <p className="text-xs font-medium text-gray-500">
            {article.source.name}
          </p>
        </div>
      </div>
    </a>
  );
}
