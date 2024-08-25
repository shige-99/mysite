import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white py-5">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-black">
          <Link href="/">shige</Link>
        </h1>
        <ul className="flex gap-3 text-black">
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
