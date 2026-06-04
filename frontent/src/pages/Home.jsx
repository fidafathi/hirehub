import { useNavigate } from "react-router-dom";
function Home() {

  const navigate = useNavigate();
  
  return (

    <div className="min-h-screen bg-gray-100">

      {/* HERO SECTION */}

      <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">

        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Find Your Dream Job Today
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Discover thousands of job opportunities with HireHub.
          Apply easily and build your future career.
        </p>

        <div className="flex gap-4">

          <button 
            onClick={() => navigate("/jobs")}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Explore Jobs
          </button>

          <button
  onClick={() =>
    navigate("/admin-login")
  }
  className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white"
>
  Recruiter Panel
</button>

        </div>

      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">

  <div className="bg-white p-6 rounded-xl shadow text-center">
    <h2 className="text-3xl font-bold">
      1000+
    </h2>
    <p>Jobs</p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow text-center">
    <h2 className="text-3xl font-bold">
      500+
    </h2>
    <p>Companies</p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow text-center">
    <h2 className="text-3xl font-bold">
      5000+
    </h2>
    <p>Candidates</p>
  </div>

</div>

      {/* FEATURED JOBS SECTION */}

      <div className="px-10 pb-20">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Jobs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* JOB CARD 1 */}

          <div className="bg-white p-6 rounded-xl shadow-lg">

            <h3 className="text-2xl font-semibold mb-2">
              Frontend Developer
            </h3>

            <p className="text-gray-600 mb-2">
              Google
            </p>

            <p className="text-gray-500 mb-4">
              Kochi • ₹40,000/month
            </p>

            <button 
              onClick={() => navigate("/apply")}
              className="bg-black text-white px-4 py-2 rounded-lg">
              Apply Now
            </button>

          </div>

          {/* JOB CARD 2 */}

          <div className="bg-white p-6 rounded-xl shadow-lg">

            <h3 className="text-2xl font-semibold mb-2">
              Backend Developer
            </h3>

            <p className="text-gray-600 mb-2">
              Infosys
            </p>

            <p className="text-gray-500 mb-4">
              Bangalore • ₹50,000/month
            </p>

            <button
              onClick={() => navigate("/apply")}
              className="bg-black text-white px-4 py-2 rounded-lg">
              Apply Now
            </button>

          </div>

          {/* JOB CARD 3 */}

          <div className="bg-white p-6 rounded-xl shadow-lg">

            <h3 className="text-2xl font-semibold mb-2">
              UI/UX Designer
            </h3>

            <p className="text-gray-600 mb-2">
              TCS
            </p>

            <p className="text-gray-500 mb-4">
              Trivandrum • ₹35,000/month
            </p>

            <button 
              onClick={() => navigate("/apply")}
              className="bg-black text-white px-4 py-2 rounded-lg">
              Apply Now
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Home;