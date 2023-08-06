'use client'
import { Article } from "@/types";
import { Chip } from "@nextui-org/react";

interface ArticleBoxProps {
  article: Article;
}

function ArticleItem({ article }: ArticleBoxProps) {
  return (
    <div className="mt-8 border-b pb-3">
      <div className="flex justify-between pb-3">
        <div className="flex gap-x-3 mb-4">
          <div className="w-[20px] h-[20px] overflow-hidden rounded-full">
            <img src={article.avatarImgUrl} />
          </div>
          <span className="text-gray-500">{article.author}</span>
        </div>
        <div>
          <Chip>{article.keyword}</Chip>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="text-lg font-semibold">{article.title}</p>
          <span className="text-sm text-gray-500">{article.description}</span>
        </div>
        <div className="w-[80px]">
          <img src={article.mainImgUrl} />
        </div>
      </div>
    </div>
  );
}

export default ArticleItem;
