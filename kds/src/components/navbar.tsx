// import { NavLink } from "react-router-dom";

export default function Navbar() {
  // const linkClasses = "relative px-1 text-sm font-medium";

  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img src="logo-kds.svg" alt="Logo" className="w-6 h-6" />
        <span className="text-xl font-bold text-teal-400 tracking-widest">
          TRACE
        </span>
      </div>

      {/* Right: Nav Links */}
      <nav className="flex items-center space-x-8 text-gray-700">
        {/* <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? "text-teal-400" : "hover:text-teal-400"}`
          }
        >
          {({ isActive }) => (
            <>
              Home
              {isActive && (
                <span className="absolute left-1/2 -bottom-1 w-4 h-1 bg-teal-400 rounded-full -translate-x-1/2" />
              )}
            </>
          )}
        </NavLink>

        <NavLink
          to="/trace"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? "text-teal-400" : "hover:text-teal-400"}`
          }
        >
          {({ isActive }) => (
            <>
              Tool
              {isActive && (
                <span className="absolute left-1/2 -bottom-1 w-4 h-1 bg-teal-400 rounded-full -translate-x-1/2" />
              )}
            </>
          )}
        </NavLink> */}
      </nav>
    </header>
  );
}
