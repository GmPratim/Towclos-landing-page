import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={190}
            height={50}
            className="m-0 w-[190px] h-[50px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a
            href="/"
            className="border-coral-red border-2 py-2 px-4 rounded-full text-coral-red font-montserrat
            font-medium hover:bg-coral-red hover:text-white transition-colors duration-300"
          >
            Sign in
          </a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
