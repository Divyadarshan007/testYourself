import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getLogout } from "../features/exam/examSlice";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/all-exam", label: "Exams" },
  { to: "/assign", label: "Assign Exam" },
  { to: "/admin", label: "Data" },
];

const Header = () => {
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((store) => store.exam.isLoggedIn);
  const handleLogout = () => {
    dispatch(getLogout(false))
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-950/70">
      <nav className="w-full border-b border-slate-800/70 bg-slate-950/70 ">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-indigo-600 grid place-items-center text-white font-bold">
              EX
            </div>
            <span className="text-lg font-semibold text-white">Exam Portal</span>
          </Link>


          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => navigate('/login')} className="rounded-lg bg-indigo-600 px-3 py-1.5 text-white text-sm hover:bg-indigo-500 transition-colors">
              Login
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                {open ? (
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-1 relative">
            {navItems
              .filter(item => {
                if (!isLoggedIn && (item.label === "Assign Exam" || item.label === "Data")) {
                  return false;
                }
                return true;
              })
              .map((item) => (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setHovered(item.to)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      [
                        "px-3 py-2 rounded-md text-sm transition-colors relative",
                        isActive ? "text-white" : "text-slate-300 hover:text-white",
                      ].join(" ")
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {(hovered === item.to || isActive) && (
                          <motion.span
                            layoutId="nav-hover"
                            className="absolute inset-0 -z-10 rounded-md bg-slate-800/80"
                            transition={{ type: "spring", stiffness: 250, damping: 22 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </div>
              ))}

            <div className="ml-3">
              {isLoggedIn
                ? <button onClick={handleLogout} className="w-full rounded-lg bg-rose-600 px-3.5 py-2 text-white text-sm hover:bg-indigo-500 transition-colors">
                  Logout
                </button>
                : <button onClick={() => navigate('/login')} className="w-full rounded-lg bg-indigo-600 px-3.5 py-2 text-white text-sm hover:bg-indigo-500 transition-colors">
                  Admin
                </button>}
            </div>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-800/70 bg-slate-950/80">
            <ul className="max-w-6xl mx-auto px-4 py-3 space-y-1">
              {navItems.filter((item) => {
                if (!isLoggedIn && (item.label === "Assign Exam" || item.label === "Data")) {
                  return false;
                }
                return true;
              }).map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        "block px-3 py-2 rounded-md text-sm",
                        isActive
                          ? "bg-slate-800/80 text-white"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/60",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                {isLoggedIn
                  ? <button onClick={handleLogout} className="w-full rounded-lg bg-rose-600 px-3.5 py-2 text-white text-sm hover:bg-indigo-500 transition-colors">
                    Logout
                  </button>
                  : <button onClick={() => navigate('/login')} className="w-full rounded-lg bg-indigo-600 px-3.5 py-2 text-white text-sm hover:bg-indigo-500 transition-colors">
                    admin
                  </button>}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
