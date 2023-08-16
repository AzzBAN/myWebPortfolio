// import Head from "next/head";
import HeadMeta from "../../components/Head";
import Navbar from "../../components/Navbar";
import HomePage from "../../components/Home";
import About from "../../components/About";
import Footer from "../../components/Footer";
import React, { useEffect, useState, useRef } from "react";

export default function Home() {
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "#home", current: false },
    { name: "About", href: "#about", current: false },
    // { name: "Projects", href: "#", current: false },
    // { name: "Calendar", href: "#", current: false },
  ]);

  const handleNavigationClick = (index) => {
    const updatedNavigation = navigation.map((item, i) => {
      if (i === index) {
        return { ...item, current: true };
      } else {
        return { ...item, current: false };
      }
    });

    setNavigation(updatedNavigation);
  };

  useEffect(() => {
    // Get the current URL hash
    const currentHash = window.location.hash;

    // Update the navigation state based on the current hash
    const updatedNavigation = navigation.map((item) => {
      return {
        ...item,
        current: item.href === currentHash || (currentHash === "" && item.name === "Home"),
      };
    });
    setNavigation(updatedNavigation);
  }, []);

  ///////////

  const sections = ["home", "about"]; // List of section IDs

  const sectionRefs = sections.reduce((acc, sectionId) => {
    acc[sectionId] = React.createRef();
    return acc;
  }, {});

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          const updatedNavigation = navigation.map((item) => {
            return {
              ...item,
              current: `#${sectionId}` === item.href,
            };
          });
          setNavigation(updatedNavigation);

          // Update navigation state or perform actions as needed
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0%",
      threshold: 0.7, // Intersection threshold, adjust as needed
    };

    const sectionObserver = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((sectionId) => {
      const sectionRef = sectionRefs[sectionId];
      if (sectionRef && sectionRef.current) {
        sectionObserver.observe(sectionRef.current);
      }
    });

    // Clean up the observer when the component unmounts
    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <>
      <HeadMeta></HeadMeta>
      <Navbar navigation={navigation} onClickNavbar={handleNavigationClick}></Navbar>
      <HomePage sectionRef={sectionRefs["home"]} />
      <About sectionRef={sectionRefs["about"]} />
      <Footer></Footer>
    </>
  );
}
