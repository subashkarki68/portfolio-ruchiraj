import bannerOther from "@/assets/banner-other.png";
import banner from "@/assets/banner.png";
import resumePDF from "@/assets/pdf/91-resume_ruchi_raj_karki.pdf";
import subashPP from "@/assets/subashPP.png";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

const Home = () => {
  const typeWriterStrings = [
    "Hello,",
    "I am Ruchi Raj",
    "Full Stack Developer",
  ];
  return (
    <div className='relative w-full h-[100vh] flex items-center justify-center'>
      {/* Banner Images */}
      <img
        src={banner}
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
        src={subashPP}
        alt='Ruchi Raj Picture'
        className='absolute top-10 w-[50%] rounded-full object-cover lg:hidden sm:right-0 sm:w-[30%]'
      />

      {/* Text and Button */}
      <div className='absolute left-10 top-1/2 transform -translate-y-1/2 text-white'>
        <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl'>
          <TypewriterComponent
            options={{
              strings: typeWriterStrings,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className='my-10 lg:w-[600px] md:w-[70%]'>
          Passionate about crafting efficient and scalable web applications.
          Experienced in building intuitive user interfaces and robust backend
          systems. Let's create something amazing together!
        </p>
        <a href={resumePDF} download='Ruchi_Raj_CV.pdf'>
          <Button className='text-md p-5'>Download CV</Button>
        </a>
      </div>
    </div>
  );
};

export default Home;
