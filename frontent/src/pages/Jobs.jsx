import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Jobs() {

  const navigate =
    useNavigate();

  const isAdmin =
    localStorage.getItem(
      "admin"
    );

  const [search,
    setSearch
  ] = useState("");

  const [jobs,
    setJobs
  ] = useState([]);

  const [editingId,
    setEditingId
  ] = useState(null);

  const [title,
    setTitle
  ] = useState("");

  const [company,
    setCompany
  ] = useState("");

  const [location,
    setLocation
  ] = useState("");

  const [salary,
    setSalary
  ] = useState("");

  //
  // GET JOBS
  //
  const fetchJobs =
    () => {

    axios
      .get(
        "http://localhost:5000/jobs"
      )
      .then((res) => {

        setJobs(
          res.data
        );

      })
      .catch((err) => {

        console.log(err);

      });

  };

  useEffect(() => {

    fetchJobs();

  }, []);

  //
  // ADD / UPDATE JOB
  //
  const handleSave =
    async () => {

    try {

      const jobData = {
        title,
        company,
        location,
        salary,
      };

      if (editingId) {

        await axios.put(
          `http://localhost:5000/jobs/${editingId}`,
          jobData
        );

        alert(
          "Job Updated"
        );

      } else {

        await axios.post(
          "http://localhost:5000/jobs",
          jobData
        );

        alert(
          "Job Added"
        );

      }

      setTitle("");
      setCompany("");
      setLocation("");
      setSalary("");
      setEditingId(
        null
      );

      fetchJobs();

    } catch (error) {

      alert(
        "Failed"
      );

    }

  };

  //
  // DELETE JOB
  //
  const handleDelete =
    async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/jobs/${id}`
      );

      alert(
        "Job Deleted"
      );

      fetchJobs();

    } catch (error) {

      alert(
        "Delete Failed"
      );

    }

  };

  //
  // EDIT JOB
  //
  const handleEdit =
    (job) => {

    setEditingId(
      job._id
    );

    setTitle(
      job.title
    );

    setCompany(
      job.company
    );

    setLocation(
      job.location
    );

    setSalary(
      job.salary
    );

  };

  const filteredJobs =
    jobs.filter((job) =>
      job.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (

    <div className="min-h-screen bg-gray-100 px-6 py-10">

      <h1 className="text-5xl font-bold text-center mb-10">
        Find Jobs
      </h1>

      {/* SEARCH */}

      <div className="flex justify-center mb-10">

        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="border p-4 rounded-xl w-[400px]"
        />

      </div>

      {/* ADMIN SECTION */}

      {isAdmin && (

        <div className="bg-white p-6 rounded-2xl shadow mb-8">

          <h2 className="text-2xl font-bold mb-4">

            {editingId
              ? "Edit Job"
              : "Add Job"}

          </h2>

          <div className="grid grid-cols-2 gap-4">

            <input
              placeholder="Job Title"
              value={title}
              onChange={(e)=>
                setTitle(
                  e.target.value
                )
              }
              className="border p-3 rounded-lg"
            />

            <input
              placeholder="Company"
              value={company}
              onChange={(e)=>
                setCompany(
                  e.target.value
                )
              }
              className="border p-3 rounded-lg"
            />

            <input
              placeholder="Location"
              value={location}
              onChange={(e)=>
                setLocation(
                  e.target.value
                )
              }
              className="border p-3 rounded-lg"
            />

            <input
              placeholder="Salary"
              value={salary}
              onChange={(e)=>
                setSalary(
                  e.target.value
                )
              }
              className="border p-3 rounded-lg"
            />

          </div>

          <div className="mt-5">

            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-5 py-3 rounded-lg"
            >
              {editingId
                ? "Update Job"
                : "Add Job"}
            </button>

          </div>

        </div>

      )}

      {/* JOBS */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {filteredJobs.map((job) => (

          <div
            key={job._id}
            className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >

            <h2 className="text-2xl font-bold mb-2">
              {job.title}
            </h2>

            <p>
              {job.company}
            </p>

            <p>
              📍 {job.location}
            </p>

            <p>
              💰 {job.salary}
            </p>

            {isAdmin ? (

              <div className="flex gap-2 mt-4">

                <button
                  onClick={() =>
                    handleEdit(job)
                  }
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(
                      job._id
                    )
                  }
                  className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>

              </div>

            ) : (

              <button
                onClick={() =>
                  navigate("/apply")
                }
                className="mt-4 bg-black text-white px-4 py-2 rounded-lg"
              >
                Apply Now
              </button>

            )}

          </div>

        ))}

      </div>

    </div>

  );
}

export default Jobs;