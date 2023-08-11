import Script from "next/script";

export default function HeadScript() {
  return (
    <>
      <Script async charset="utf-8" src="//cdn.embedly.com/widgets/platform.js"></Script>
    </>
  );
}
