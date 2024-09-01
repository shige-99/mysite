import Header from "@/components/Header";

const AboutPage = () => {
  return (
    <div>
      <Header />

      <div className="profile-section mb-10 mx-5 pt-10 sm:pt-16 text-slate-950">
        <h2 className="text-2xl font-bold mb-4">プロフィール</h2>
        <p>茂太 翼(しげた つばさ)</p>
        <p>1999.1.14</p>
        <p>沖縄生まれ、沖縄育ち。</p>
        <p>TypeScriptを勉強中の都内SESで勤務するエンジニア。</p>
        <p>趣味：旅行、野球観戦、プログラミング</p>
      </div>

      <div className="skill-section mx-5 text-slate-950">
        <h2 className="text-2xl font-bold mb-4">スキル</h2>
        <img src="https://skillicons.dev/icons?i=html,css,tailwindcss,javascript,typescript,nextjs,react,svelte,python,git&perline=5" />
      </div>
    </div>
  );
};

export default AboutPage;
