import { getKeywords } from "@/app/api/keyword/getKeywords";

async function ManagedKeyword() {
  const { keywords } = await getKeywords();
  return (
    <div className="py-4 font-semibold text-gray-800 px-4">
      <div className="text-lg mb-3 ">등록된 키워드</div>
      <div className="flex gap-x-2">
        {keywords &&
          keywords.map((keyword) => (
            <div key={keyword.keyword}>{keyword.keyword}</div>
          ))}
      </div>
    </div>
  );
}

export default ManagedKeyword;
