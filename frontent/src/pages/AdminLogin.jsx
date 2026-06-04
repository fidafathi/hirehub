import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const navigate =
    useNavigate();

  const [email,
    setEmail
  ] = useState("");

  const [password,
    setPassword
  ] = useState("");

  const handleLogin =
    (e) => {

    e.preventDefault();

    if (
      email ===
      "admin@hirehub.com"
      &&
      password ===
      "admin123"
    ) {

     localStorage.removeItem(
  "user"
);

localStorage.setItem(
  "admin",
  "true"
);

navigate("/jobs");

window.location.reload();

    } else {

      alert(
        "Only Admin Can Login"
      );

    }
  };

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-8">
          Recruiter Login
        </h1>

        <form
          onSubmit={
            handleLogin
          }
          className="flex flex-col gap-5"
        >

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-lg hover:bg-gray-800"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  );
}

export default AdminLogin;