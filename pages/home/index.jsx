// import Head from "next/head";
import HeadMeta from "../../components/Head";
import Navbar from "../../components/Navbar";
import HomePage from "../../components/Home";

export default function Home() {
  return (
    <>
      <HeadMeta></HeadMeta>
      <Navbar></Navbar>
      <HomePage></HomePage>
    </>
  );
}
