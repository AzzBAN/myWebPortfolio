// import Head from "next/head";
import HeadMeta from "../../components/Head";
import Navbar from "../../components/Navbar";
import HomePage from "../../components/Home";
import About from "../../components/About";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <HeadMeta></HeadMeta>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <About></About>
      <Footer></Footer>
    </>
  );
}
