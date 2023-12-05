import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">ASB</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
         <NavLink
          to="https://drive.google.com/file/d/1JZydDGHi9DNvXvm2V3HxjHTkCntWRbpN/view?usp=drive_link"
          target="_blank"
        >
          Resume
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
