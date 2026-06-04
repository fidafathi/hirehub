function JobDetails() {
  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-lg">

        <h1 className="text-4xl font-bold mb-4">
          Frontend Developer
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          Google • Kochi • Full Time
        </p>

        <div className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            Job Description
          </h2>

          <p className="text-gray-700 leading-8">
            We are looking for a skilled Frontend Developer
            to build modern and responsive web applications
            using React.js and Tailwind CSS.
          </p>

        </div>

        <div className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            Qualifications
          </h2>

          <ul className="list-disc pl-6 text-gray-700 leading-8">

            <li>Bachelor’s Degree in Computer Science</li>

            <li>Knowledge in React.js</li>

            <li>Understanding of responsive design</li>

            <li>Basic API integration skills</li>

          </ul>

        </div>

        <div className="mb-10">

          <h2 className="text-2xl font-semibold mb-3">
            Salary
          </h2>

          <p className="text-gray-700">
            ₹40,000/month
          </p>

        </div>

        <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800">
          Apply Now
        </button>

      </div>

    </div>

  );
}

export default JobDetails;