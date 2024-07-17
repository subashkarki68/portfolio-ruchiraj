import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const navItems = [
  { text: "Home", to: "/" },
  { text: "Projects", to: "/projects" },
  { text: "About me", to: "/about" },
  { text: "Contact me", to: "/contact" },
];

const MainNav = () => {
  useGSAP(() => {
    gsap.from("#navbar_main", {
      y: -100,
      ease: "power1.inOut",
    });
  });
  return (
    <div
      id="navbar_main"
      className="mr-4 hidden gap-2 md:flex w-full justify-between items-center"
    >
      <Link to={"/"} className="text-xl font-semibold">
        Ruchi Raj Karki
      </Link>
      <div className="flex gap-16">
        {navItems.map((item, index) => (
          <Link key={index} to={item.to}>
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNav;
