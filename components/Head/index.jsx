import Head from "next/head";
import HeadScript from "./script";

export default function HeadMeta({ title, description, keywords }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
      <link rel="icon" href="/icon.svg" type="image/x-icon" />
      {/* <HeadScript></HeadScript> */}
    </Head>
  );
}

HeadMeta.defaultProps = {
  title: "AzzBAN | WebPortfolio",
  description: "Welcome to my Web Portfolio",
  keywords: "Azzban WebPortfolio - Azhar Baihaqi Nugraha",
};
