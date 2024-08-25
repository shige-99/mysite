import { Metadata } from "next";

export const metadata: Metadata = {
  title: "shige-me",
  description: "personal site of shige",
  openGraph: {
    title: "shige-me",
    description: "personal site of shige",
    siteName: "personal site of shige",
    locale: "jp",
    type: "website",
  },
};

const Home = () => {
  return (
    <div className="py-8 px-4 mb-10 rounded-lg flex flex-col items-center bg-slate-50 container">
      <h1 className="text-3xl font-bold">ハイサイ👋🏻</h1>
      <div className="mt-4">
        <p className="text-lg text-s">
          shige、東京で働ちょーるソフトウェアエンジニアやさ。
        </p>
      </div>
    </div>
  );
};

export default Home;
