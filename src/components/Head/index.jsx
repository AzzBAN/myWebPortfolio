import Head from "next/head";

export default function HeadMeta({ title, description, keywords }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
      <link rel="icon" href="/favicon-pgd.png" />
      <script async charset="utf-8" src="//cdn.embedly.com/widgets/platform.js"></script>
    </Head>
  );
}

HeadMeta.defaultProps = {
  title: "Home",
  description: "Welcome to my Web Portfolio",
  keywords: "Azzban WebPortfolio - Azhar Baihaqi Nugraha",
};
