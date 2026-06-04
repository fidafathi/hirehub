import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate =
    useNavigate();

  const user =
    localStorage.getItem(
      "user"
    );

  const admin =
    localStorage.getItem(
      "admin"
    );

  const handleLogout =
    () => {

    localStorage.removeItem(
      "user"
    );

    localStorage.removeItem(
      "admin"
    );

    navigate("/");

    window.location.reload();
  };

  return (

    <nav className="bg-black text-white p-4 flex justify-between items-center">

      <h1
        onClick={() =>
          navigate("/")
        }
        className="text-2xl font-bold cursor-pointer"
      >
        HireHub
      </h1>

      <div className="flex gap-6 items-center">

        <Link to="/">
          Home
        </Link>

        <Link to="/jobs">
          Jobs
        </Link>

        {!user && !admin && (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/signup">
              Signup
            </Link>
          </>
        )}

        {user && (
          <Link to="/dashboard">
            Dashboard
          </Link>
        )}

        {admin && (
          <Link to="/recruiter">
            Recruiter Dashboard
          </Link>
        )}

        {(user || admin) && (
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;