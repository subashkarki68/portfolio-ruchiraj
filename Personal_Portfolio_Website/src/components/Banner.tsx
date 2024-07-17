import bannerOther from "@/assets/compressed/banner-other.webp";
import subashPP from "@/assets/compressed/subashPP.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DownloadIcon } from "lucide-react";
import { useEffect } from "react";
import TypewriterComponent from "typewriter-effect";
import FancyButton from "./FancyButton";

const Banner = () => {
  const hoverTL = gsap.timeline();
  hoverTL.pause();
  useGSAP(() => {
    gsap.from("#subashPP", {
      opacity: 0,
      delay: 0.4,
    });
    gsap.from("#para", {
      x: -1000,
      ease: "power1.inOut",
      delay: 0.4,
    });
    gsap.from("#typeWriter", {
      x: -1000,
      ease: "power1.inOut",
      delay: 0.6,
    });
    gsap.from(".wrapper", {
      x: -1000,
      opacity: 0,
      duration: 1,
      delay: 0.9,
      ease: "power2.out",
      stagger: 0.2,
    });
  });
  useEffect(() => {}, []);
  const typeWriterStrings = [
    "Hello,",
    "I am Ruchi Raj",
    "Full Stack Developer",
  ];
  return (
    <div className='relative w-full h-[100svh] flex items-center justify-center'>
      {/* Banner Images */}
      <img
        src={bannerOther}
        //banner
        alt='Banner Image'
        className='w-full h-full object-cover hidden lg:block'
      />
      <img
        src={bannerOther}
        alt='Banner Image'
        className='w-full h-full object-cover lg:hidden'
      />

      {/* Black Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black lg:opacity-20 opacity-50'></div>

      {/* Ruchi Raj Picture */}
      <img
        id='subashPP'
        src={subashPP}
        alt='Ruchi Raj Picture'
        className='absolute top-10 w-[50%] rounded-full object-cover lg:right-0 sm:right-0 sm:w-[30%]'
      />

      {/* Text and Button */}
      <div className='absolute mt-10 left-10 top-1/2 transform -translate-y-1/2 text-white z-10'>
        <div
          id='typeWriter'
          className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl select-none'
        >
          <TypewriterComponent
            options={{
              strings: typeWriterStrings,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className='mt-20 lg:w-[600px] md:w-[70%] z-10 select-none' id='para'>
          Passionate about crafting efficient and scalable web applications.
          Experienced in building intuitive user interfaces and robust backend
          systems. Let's create something amazing together!
        </p>
        {/* <a href={resumePDF} download='Ruchi_Raj_CV.pdf'>
          <Button
            id='downloadCV'
            className='text-md px-10 py-6 bg-midnight_green-700 text-black mt-10 hover:bg-midnight_green-900'
          >
            Download CV
          </Button>
        </a>
        <br /> */}
        <div className='wrapper mt-16'>
          <FancyButton
            text='Download CV'
            icon={
              <DownloadIcon className='ml-4 bottom-1 left-[1.5rem] relative inline-block' />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
