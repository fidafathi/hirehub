import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSignup = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      "http://localhost:5000/api/users/signup",
      {
        name,
        email,
        password,
      }
    );

    alert("Signup Successful");

    navigate("/login");

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Signup Failed"
    );

  }
};
  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-[450px]">

        <h1 className="text-3xl font-bold text-center mb-8">
          Create Account
        </h1>

        <form
         onSubmit={handleSignup}
         className="flex flex-col gap-5">

          <input
             type="text"
             placeholder="Enter your name"
             value={name}
             onChange={(e) => setName(e.target.value)}
             className="border p-3 rounded-lg outline-none"
             />


          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded-lg outline-none"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 rounded-lg outline-none"
          />

          <select
            className="border p-3 rounded-lg outline-none"
          >

            <option>
              Select Role
            </option>

            <option>
              Job Seeker
            </option>

            <option>
              Recruiter
            </option>

          </select>

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-lg hover:bg-gray-800"
          >
            Signup
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?
          <span 
            onClick={() => navigate("/login")}
            className="text-black font-semibold cursor-pointer ml-1">
            Login
          </span>
        </p>

      </div>

    </div>

  );
}

export default Signup;