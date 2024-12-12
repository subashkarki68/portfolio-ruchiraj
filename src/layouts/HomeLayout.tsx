import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";

const HomeLayout = () => {
  return (
    <div>
      <SiteHeader />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
