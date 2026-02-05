import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
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
      const res = await axios.post("/api/users/login", formData);
      localStorage.setItem("token", res.data.token);
      setUser(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center login min-h-[calc(80vh-200px)]">
        <div className="w-[500px] h-[250px] max-w-[480px] bg-white/10 backdrop-blur-md rounded-2xl border border-black/20 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb- text-center h2 ">
            Login
          </h2>

          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <div className="flex items-center justify-center gap-6">
            <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email:"
                value={formData.email}
                onChange={handleChange}
                className="w-[410px] mb-3 flex flex-col rounded-lg bg-blue-600/10 h-8 backdrop-blur-md p-6 border border-black/20 shadow-xl"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password:"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 flex flex-col bg-blue-600/10 backdrop-blur-md rounded-lg h-8 border border-black/20 shadow-xl"
                required
              />

              <div className="flex items-center justify-center">
                <button className="w-[70px] text-center bg-yellow-500 text-black py- rounded-lg font-semibold">
                  Login
                </button>
              </div>

            </form>
          </div>

          {/* Register link */}
          <div className="gap-6 flex justify-center items-center m-6">
          <p className="text-center text-white mt-">
            Don’t have an account?{" "}
            <Link to="/register" className="text-yellow-400 font-semibold">
              <div>
                <button className="bg-black w-[100px] text-center text-[20px] backdrop-blur-md border border-white/20 rounded-xl shadow-xl">
                  Register
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

export default Login;
