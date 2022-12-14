import React, { useContext } from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Button from "../Button/Button";

const Navbar = () => {
  const { User, LogOut } = useContext(AuthContext);
  const HandleLogout = () => {
    LogOut()
      .then(() => {
        swal({
          title: "Logout Successful",
          button: "OK",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const MenuItems = (
    <React.Fragment>
      <li className="text-xl font-bold block md:hidden">
        <p>{User?.displayName}</p>
      </li>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/Appointment"}>Appointment</Link>
      </li>
      <li>
        <Link to={"/About"}>About</Link>
      </li>
      <li>
        <Link to={"/dashboard"}>Dashboard</Link>
      </li>
      {User ? (
        <li>
          <button onClick={HandleLogout}>Logout</button>
        </li>
      ) : (
        <>
          <li>
            <Link to={"/Login"}>Login</Link>
          </li>
          <li>
            <Link to={"/Register"}>Register</Link>
          </li>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100 flex justify-between ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {MenuItems}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Western Dental Center
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{MenuItems}</ul>
        </div>
        <div>
          <label
            htmlFor="my-drawer-2"
            tabIndex={2}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <div className="text-lg font-bold  hidden md:block mx-2">
          <p>{User?.displayName}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
