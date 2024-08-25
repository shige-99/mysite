const AboutPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2 underline decoration-black underline-offset-4">
        Bio
      </h2>
      <p>茂太 翼（しげた つばさ）</p>
      <p>1999.1.14</p>
      <p>沖縄生まれ、沖縄育ち</p>
      <p>趣味：野球、旅行、プログラミング</p>
      <br />
      <h2 className="text-2xl font-bold mb-2 underline decoration-black underline-offset-4">
        スキル
      </h2>
      <p className="text-center">
        <img src="https://skillicons.dev/icons?i=html,css,tailwindcss,javascript,typescript,nextjs,react,svelte,python,git&perline=5" />
      </p>
    </div>
  );
};

export default AboutPage;
