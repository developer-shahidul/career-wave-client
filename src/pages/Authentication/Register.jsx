import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleResister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    register(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Resister Successfully",
            icon: "success",
            draggable: true,
          });
        }
        navigate("/login");
        // console.log(result.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Resister to Your Account
        </h2>

        <form onSubmit={handleResister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your password"
              autoComplete="current-passwoard"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Resister
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don't have an account?
          <Link to="/login" className="text-blue-600 hover:underline">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
