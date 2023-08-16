import Home from "./home";

export default function index() {
  return Home();
}

// import React, { useEffect, useRef } from "react";

// function SectionVisibility() {
//   const sections = ["home", "about", "projects"]; // List of section IDs

//   const sectionRefs = sections.reduce((acc, sectionId) => {
//     acc[sectionId] = React.createRef();
//     return acc;
//   }, {});

//   useEffect(() => {
//     const handleIntersection = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const sectionId = entry.target.id;
//           console.log(`Section ${sectionId} is in view.`);

//           // Update navigation state or perform actions as needed
//         }
//       });
//     };

//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5, // Intersection threshold, adjust as needed
//     };

//     const sectionObserver = new IntersectionObserver(handleIntersection, observerOptions);

//     sections.forEach((sectionId) => {
//       const sectionRef = sectionRefs[sectionId];
//       if (sectionRef && sectionRef.current) {
//         sectionObserver.observe(sectionRef.current);
//       }
//     });

//     // Clean up the observer when the component unmounts
//     return () => {
//       sectionObserver.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//       <section ref={sectionRefs["home"]} id="home" className="bg-yellow-500 h-screen">
//         Home Section
//       </section>
//       <section ref={sectionRefs["about"]} id="about" className="bg-yellow-300 h-screen">
//         About Section
//       </section>
//       <section ref={sectionRefs["projects"]} id="projects" className="bg-yellow-100 h-screen">
//         Projects Section
//       </section>
//       {/* Add more sections as needed */}
//     </div>
//   );
// }

// export default SectionVisibility;
