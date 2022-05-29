import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Blogs from "../Blogs";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/pp">My Portfolieo</Link>
                </li>

                {user ? (
                  <>
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <span>{user.displayName}</span>
                    <button
                      onClick={() => {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        navigate("/login");
                      }}
                    >
                      {" "}
                      Sign Out
                    </button>
                  </>
                ) : (
                  <li>
                    <Link to="/login">Log in</Link>
                  </li>
                )}
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl mr-5px">
            Computer Parts Corner
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal pl-3">
            <li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/pp">My Portfolieo</Link>
              </li>

              {user ? (
                <>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <span>{user.displayName}</span>
                  <button
                    onClick={() => {
                      signOut(auth);
                      localStorage.removeItem("accessToken");
                      navigate("/login");
                    }}
                  >
                    {" "}
                    Sign Out
                  </button>
                </>
              ) : (
                <li>
                  <Link to="/login">Log in</Link>
                </li>
              )}
            </li>
          </ul>
        </div>
        <label></label>
        <div className="navbar-end">
          <label
            tabindex="0"
            for="my-drawer-2"
            class="btn drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
