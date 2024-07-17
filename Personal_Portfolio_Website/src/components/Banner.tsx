import bannerOther from "@/assets/compressed/banner-other.webp";
import subashPP from "@/assets/compressed/subashPP.webp";
import resumePDF from "@/assets/pdf/91-resume_ruchi_raj_karki.pdf";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

const Banner = () => {
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
    gsap.from("#downloadCV", {
      x: -1000,
      opacity: 0,
      duration: 1,
      delay: 0.9,
      ease: "power2.out",
      stagger: 0.2,
    });
  });
  const typeWriterStrings = [
    "Hello,",
    "I am Ruchi Raj",
    "Full Stack Developer",
  ];
  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center">
      {/* Banner Images */}
      <img
        src={bannerOther}
        //banner
        alt="Banner Image"
        className="w-full h-full object-cover hidden lg:block"
      />
      <img
        src={bannerOther}
        alt="Banner Image"
        className="w-full h-full object-cover lg:hidden"
      />

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black lg:opacity-20 opacity-50"></div>

      {/* Ruchi Raj Picture */}
      <img
        id="subashPP"
        src={subashPP}
        alt="Ruchi Raj Picture"
        className="absolute top-10 w-[50%] rounded-full object-cover lg:right-0 sm:right-0 sm:w-[30%]"
      />

      {/* Text and Button */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white">
        <div
          id="typeWriter"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl"
        >
          <TypewriterComponent
            options={{
              strings: typeWriterStrings,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="my-10 lg:w-[600px] md:w-[70%]" id="para">
          Passionate about crafting efficient and scalable web applications.
          Experienced in building intuitive user interfaces and robust backend
          systems. Let's create something amazing together!
        </p>
        <a href={resumePDF} download="Ruchi_Raj_CV.pdf">
          <Button id="downloadCV" className="text-md p-5 ">
            Download CV
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
