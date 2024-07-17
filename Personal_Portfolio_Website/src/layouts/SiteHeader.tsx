import MainNav from "./Navbar/MainNav";
import MobileNav from "./Navbar/MobileNav";

const SiteHeader = () => {
  return (
    <header id="site_header" className="w-full border-b ">
      <div className="flex h-14 px-4">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default SiteHeader;
