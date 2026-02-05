import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("/api/users/register", formData);

      // Redirect to login AFTER successful registration
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <div className="register">
        <div className="flex justify-center items-center">
          <div className="w-[500px] h-[300px] max-w-md bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Register
            </h2>

            {error && <p className="text-red-500 mb-3">{error}</p>}

            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-6">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-[410px] mb-3 flex flex-col rounded-lg bg-blue-600/10 h-8 backdrop-blur-md p-6 border border-black/20 shadow-xl"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-[410px] mb-3 flex flex-col rounded-lg bg-blue-600/10 h-8 backdrop-blur-md p-6 border border-black/20 shadow-xl"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-[410px] mb-3 flex flex-col rounded-lg bg-blue-600/10 h-8 backdrop-blur-md p-6 border border-black/20 shadow-xl"
                required
              />

              <button className="w-[100px] bg-yellow-500 text-black py-2 rounded-lg font-semibold">
                Register
              </button>
            </form>

            {/* Login link */}
            <p className="text-center text-white mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-yellow-400 font-semibold">
                <div>
                  <button className="bg-black w-[70px] text-center text-[20px] backdrop-blur-md border border-white/20 rounded-xl shadow-xl">
                    Login
                  </button>
                </div>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
