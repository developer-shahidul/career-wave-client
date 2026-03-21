import { NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser } = useAuth();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Signed out successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        console.log("sign-Out user");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        Swal.fire({
          title: "Error!",
          text: error.message || "Something went wrong",
          icon: "error",
        });
      });
  };

  const link = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/addJob"}>Add Job</NavLink>
        </li>
      )}
      {user && (
        <>
          <li>
            <NavLink to="/myApplications">MyApplications</NavLink>
          </li>
        </>
      )}
      {/* for applicant links, check roules as well */}
      {user && (
        <>
          <li>
            <NavLink to="/jobApplications">My Posted Jobs</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm top-0 left-0  fixed backdrop-blur-3xl opacity-100 z-50 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Career Wave</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <a className="btn" onClick={handleSignOut}>
              Sign-Out
            </a>
          ) : (
            <div className="space-x-1">
              <NavLink className="btn" to="/resister">
                Resister
              </NavLink>
              <NavLink className="btn" to="/login">
                LogIn
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
