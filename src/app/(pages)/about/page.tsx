const AboutPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-2 underline decoration-black underline-offset-4">
        Bio
      </h2>
      <p>茂太 翼（しげた つばさ）</p>
      <p>1999.1.14</p>
      <p>沖縄生まれ、沖縄育ち</p>
      <p>趣味：野球、旅行、プログラミング</p>
      <br />
      <h2 className="text-xl font-bold mb-2 underline decoration-black underline-offset-4">
        スキル
      </h2>
      <img src="https://skillicons.dev/icons?i=html,css,tailwindcss,javascript,typescript,nextjs,react,svelte,python,git&perline=5" />
      <br />
      <h2 className="text-xl font-bold mb-2 underline decoration-black underline-offset-4">
        キャリア
      </h2>
      <div className="text-left">
        <p>2023/05~ SES</p>
        <p>2022/04 セメントメーカー</p>
        <p>2017/03 琉球大学　卒業</p>
      </div>
    </div>
  );
};

export default AboutPage;
