import Menu from "../Menu";
import Link from "next/link";

const menuLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Leaderboards",
    href: "/leaderboards",
  },
];
export default function Sidebar({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="site-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {children}
        <label
          htmlFor="site-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side h-screen bg-base-300">
        <label htmlFor="site-drawer" className="drawer-overlay"></label>
        <Menu items={menuLinks} />
      </div>
    </div>
  );
}
