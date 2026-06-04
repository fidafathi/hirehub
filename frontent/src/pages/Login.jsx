import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate =
    useNavigate();

  const [email,
    setEmail
  ] = useState("");

  const [password,
    setPassword
  ] = useState("");

  const handleLogin =
    async (e) => {

    e.preventDefault();

    try {

      const res =
        await axios.post(
          "http://localhost:5000/api/users/login",
          {
            email,
            password,
          }
        );

      alert(
        res.data.message
      );

      //
      // ADMIN LOGIN
      //
      if (
        res.data.role ===
        "recruiter"
      ) {

        localStorage.removeItem(
          "user"
        );

        localStorage.setItem(
          "admin",
          "true"
        );

        navigate(
          "/jobs"
        );

        window.location.reload();

        return;
      }

      //
      // NORMAL USER LOGIN
      //
      localStorage.removeItem(
        "admin"
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          res.data.user
        )
      );

      navigate("/");

      window.location.reload();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-8">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-5"
        >

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="border p-3 rounded-lg outline-none"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="border p-3 rounded-lg outline-none"
          />

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-lg hover:bg-gray-800"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Don’t have an account?

          <span
            onClick={() =>
              navigate("/signup")
            }
            className="text-black font-semibold cursor-pointer ml-1"
          >
            Signup
          </span>

        </p>

      </div>

    </div>

  );
}

export default Login;