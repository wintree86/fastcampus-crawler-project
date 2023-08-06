import ArticleList from "@/components/ArticleList";
import Header from "@/components/Common/Header";
import ManagedKeyword from "@/components/ManagedKeyword";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <div className="font-mono w-[420px] bg-white">
        <Header />
        <div className="mt-[60px] py-10">
          <ManagedKeyword />
          <ArticleList />
        </div>
      </div>
    </main>
  );
}
