import { Keyword } from "@/types";

export const getKeywords = async () => {
  const response = await fetch(`http://localhost:3001/api/keyword`);

  if (!response.ok) {
    throw new Error("something went to wrong");
  }

  return (await response.json()) as { keywords: Keyword[] };
};
