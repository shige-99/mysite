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
  return <div className="text-[50px]">Home</div>;
};

export default Home;
