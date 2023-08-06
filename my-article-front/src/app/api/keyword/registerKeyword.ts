export const registerKeyword = async (data: { keyword: string }) => {
  const response = await fetch(`http://localhost:3001/api/keyword`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("something went to wrong");
  }

  return await response.json();
};
