import { Article } from "@/types";

export const getArticles = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/article`);

  if (!response.ok) {
    return { articles: [] };
  }

  return (await response.json()) as { articles: Article[] };
};
