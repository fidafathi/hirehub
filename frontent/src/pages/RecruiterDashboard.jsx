import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RecruiterDashboard() {

  const navigate = useNavigate();

  const [applications,
    setApplications
  ] = useState([]);

  useEffect(() => {

    axios
      .get(
        "http://localhost:5000/applications"
      )
      .then((res) => {

        setApplications(
          res.data
        );

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  const acceptApplication =
  async (id) => {

    try {

      await axios.put(
        `http://localhost:5000/applications/accept/${id}`
      );

      alert(
        "Application Accepted"
      );

      window.location.reload();

    } catch (error) {

      alert(
        "Something went wrong"
      );

    }

  };

  const rejectApplication =
  async (id) => {

    try {

      await axios.put(
        `http://localhost:5000/applications/reject/${id}`
      );

      alert(
        "Application Rejected"
      );

      window.location.reload();

    } catch (error) {

      alert(
        "Something went wrong"
      );

    }

  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold">
          Recruiter Dashboard
        </h1>

      </div>

      <div className="grid gap-5">

        {applications.map((app) => (

          <div
            key={app._id}
            className="bg-white p-6 rounded-2xl shadow"
          >

            <h2 className="text-2xl font-bold mb-2">
              {app.name}
            </h2>

            <p>
              Email:
              {app.email}
            </p>

            <p>
              Phone:
              {app.phone}
            </p>

            <p>
              Qualification:
              {app.qualification}
            </p>

            <p>
              Course:
              {app.course}
            </p>

            <p>
              Experience:
              {app.experience}
            </p>

            <p className="font-bold mt-3">
              Status:
              {app.status}
            </p>

           {app.status === "Accepted" ? (

  <div className="mt-5">

    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold">
      ✅ Accepted
    </span>

  </div>

) : (

  <div className="flex gap-4 mt-5">

    <button
      onClick={() =>
        acceptApplication(app._id)
      }
      className="bg-green-600 text-white px-5 py-2 rounded-lg"
    >
      Accept
    </button>

    <button
      onClick={() =>
        rejectApplication(app._id)
      }
      className="bg-red-600 text-white px-5 py-2 rounded-lg"
    >
      Reject
    </button>

  </div>

)}

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecruiterDashboard;