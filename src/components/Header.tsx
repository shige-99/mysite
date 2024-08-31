import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white py-5 text-[25px]">
      <div className="container flex justify-between items-center">
        <h1 className="text-black mx-5">
          <Link href="/">
            <img
              src="favicon.ico"
              alt="icon"
              className="h-10 w-10 rounded-full object-cover"
            />
          </Link>
        </h1>
        <ul className="flex gap-3 text-black mx-5">
          <li>
            <Link href="/about">わたし</Link>
          </li>
          <li>
            <Link href="/blog">ブログ</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
