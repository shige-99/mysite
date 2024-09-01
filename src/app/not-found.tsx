import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[150px]">
      <h2 className="text-[20px] text-center mb-4 text-black">
        ページが見つかりませんでした
      </h2>
      <Link href="/">
        <button className="rounded-full py-2 px-4 text-black bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300">
          ホームに戻る
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
