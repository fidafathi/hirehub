import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [applications,
    setApplications
  ] = useState([]);

  useEffect(() => {

    axios
      .get(
        `http://localhost:5000/applications/user/${user?.email}`
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

  return (
    <div className="min-h-screen p-10 bg-gray-100">

      <h1 className="text-4xl font-bold mb-4">
        Welcome {user?.name}
      </h1>

      <p className="text-gray-600 mb-10">
        Manage your profile and applications
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Applied Jobs
          </h2>

          <p className="text-4xl mt-3">
            {applications.length}
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Saved Jobs
          </h2>

          <p className="text-4xl mt-3">
            0
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Profile
          </h2>

          <p className="mt-3">
            Active
          </p>

        </div>

      </div>

      <div className="mt-10 bg-white p-6 rounded-2xl shadow">

        <h2 className="text-2xl font-bold mb-4">
          My Applications
        </h2>

        {applications.length === 0 ? (

          <p>
            No applications yet
          </p>

        ) : (

          applications.map((app) => (

            <div
              key={app._id}
              className="border-b py-3"
            >

              <p>
                Qualification:
                {app.qualification}
              </p>

              <p>
                Experience:
                {app.experience}
              </p>

              <p>
                Status:
                {app.status}
              </p>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Dashboard;