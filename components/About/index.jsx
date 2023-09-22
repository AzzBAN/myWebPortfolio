export default function About(props) {
  return (
    <>
      <section ref={props.sectionRef} class="about" id="about">
        <div className="bg-slate-800 h-[calc(100vh)] top-0 w-full -z-10 pt-6">
          <div className="flex max-lg:flex-col justify-center items-center gap-x-36 h-full p-20 px-[15%]">
            <div className="w-[90%] max-sm:w-[65%] max-lg:w-[45%] max-w-sm flex-shrink-1 flex justify-center">
              <img className="rounded-3xl object-cover" src="/IMG_9574.jpg" alt="" />
            </div>
            <div className="flex justify-center items-center h-full w-full max-lg:pt-10">
              <div className="text-left">
                <h3 className="font-bold text-4xl">I&apos;m Azhar</h3>
                <h5>Fullstack Developer</h5>
                <p className="mt-5">
                  I am a Full-Stack developer based in Bandung, Indonesia. I am an Computer Science undergraduate from Telkom University. I am very passionate about improving my coding skills & developing applications & websites. I
                  build WebApps and Websites using Next JS. Working for myself to improve my skills. Love to build Full-Stack clones.
                </p>
                <p className="mt-3">
                  <span className="text-yellow-200">Email :</span> azharngrh0401@gmail.com
                </p>
                <p className="mt-3">
                  <span className="text-yellow-200">Place :</span> Bandung
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
