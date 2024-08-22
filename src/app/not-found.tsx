import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[100px]">
      <h2 className="text-[20px] text-center mb-4">
        ページが見つかりませんでした
      </h2>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
