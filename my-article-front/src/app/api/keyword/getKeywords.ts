import { Keyword } from "@/types";

export const getKeywords = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/keyword`
  );

  if (!response.ok) {
    return { keywords: [] };
  }

  return (await response.json()) as { keywords: Keyword[] };
};
