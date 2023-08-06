import { Article } from "@/types";

export const getArticles = async () => {
  const response = await fetch(`http://localhost:3001/api/article`);

  if (!response.ok) {
    throw new Error("something went to wrong");
  }

  return (await response.json()) as { articles: Article[] };
};
