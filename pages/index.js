// import Head from "next/head";
import HeadMeta from "../src/components/Head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/Navbar";

export default function Home() {
  return (
    <>
      <HeadMeta></HeadMeta>
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold underline">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </>
  );
}
