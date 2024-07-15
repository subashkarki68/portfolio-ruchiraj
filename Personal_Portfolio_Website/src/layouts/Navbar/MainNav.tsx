import { Link } from "react-router-dom";

const navItems = [
  { text: "Home", to: "/" },
  { text: "Projects", to: "/projects" },
  { text: "About me", to: "/about" },
  { text: "Contact me", to: "/contact" },
];

const MainNav = () => {
  return (
    <div className='mr-4 hidden gap-2 md:flex w-full justify-between items-center'>
      <Link to={"/"}>logo</Link>
      <div className='flex gap-16'>
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
