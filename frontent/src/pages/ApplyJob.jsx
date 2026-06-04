import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ApplyJob() {

  const navigate = useNavigate();

  // LOGIN CHECK
  useEffect(() => {

    const user =
      localStorage.getItem("user");

    if (!user) {
      navigate("/login");
    }

  }, []);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // USER DATA
  const [name] = useState(
    user?.name || ""
  );

  const [email] = useState(
    user?.email || ""
  );

  // FORM DATA
  const [phone, setPhone] =
  useState("");

  const [
    qualification,
    setQualification
  ] = useState("");

  const [
    plusTwoStream,
    setPlusTwoStream
  ] = useState("");

  const [course, setCourse] =
  useState("");

  const [
    experience,
    setExperience
  ] = useState("");

  // SUBMIT
  const handleApply = async (e) => {

    e.preventDefault();

    if (
  !phone ||
  !qualification ||
  !experience
) {

  return alert(
    "Please fill all fields"
  );

}

if (
  phone.length !== 10
) {

  return alert(
    "Phone number must be 10 digits"
  );

}

if (
  qualification === "+2" &&
  !plusTwoStream
) {

  return alert(
    "Select +2 stream"
  );

}

if (
  qualification === "Degree" &&
  (
    !plusTwoStream ||
    !course
  )
) {

  return alert(
    "Fill all degree details"
  );

}

    try {

      await axios.post(
        "http://localhost:5000/applications",
        {
          name,
          email,
          phone,
          qualification,
          plusTwoStream,
          course,
          experience,
        }
      );

      alert(
        "Application Submitted Successfully"
      );

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Submission Failed");

    }

  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Job Application
        </h1>

        <form
          onSubmit={handleApply}
          className="flex flex-col gap-4"
        >

          <input
            value={name}
            readOnly
            className="border p-3 rounded-lg bg-gray-100"
          />

          <input
            value={email}
            readOnly
            className="border p-3 rounded-lg bg-gray-100"
          />

          <input
            type="tel"
            maxLength="10"
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target.value.replace(
                  /\D/g,
                  ""
                )
              )
            }
            placeholder="Phone Number"
            className="border p-3 rounded-lg"
          />

          <select
            value={qualification}
            onChange={(e) => {
              setQualification(
                e.target.value
              );
              setPlusTwoStream("");
              setCourse("");
            }}
            className="border p-3 rounded-lg"
          >
            <option value="">
              Select Qualification
            </option>

            <option value="SSLC">
              SSLC
            </option>

            <option value="+2">
              Higher Secondary (+2)
            </option>

            <option value="Degree">
              Degree
            </option>

          </select>

          {qualification === "+2" && (

            <select
              value={plusTwoStream}
              onChange={(e) =>
                setPlusTwoStream(
                  e.target.value
                )
              }
              className="border p-3 rounded-lg"
            >
              <option value="">
                Select Stream
              </option>

              <option>
                Science
              </option>

              <option>
                Commerce
              </option>

              <option>
                Humanities
              </option>

              <option>
                Computer Science
              </option>

            </select>

          )}

          {qualification === "Degree" && (

            <>
              <select
                value={plusTwoStream}
                onChange={(e) =>
                  setPlusTwoStream(
                    e.target.value
                  )
                }
                className="border p-3 rounded-lg"
              >
                <option value="">
                  Select +2 Stream
                </option>

                <option>
                  Science
                </option>

                <option>
                  Commerce
                </option>

                <option>
                  Humanities
                </option>

                <option>
                  Computer Science
                </option>

              </select>

              <select
                value={course}
                onChange={(e) =>
                  setCourse(
                    e.target.value
                  )
                }
                className="border p-3 rounded-lg"
              >
                <option value="">
                  Select Degree Course
                </option>

                <option>
                  BCA
                </option>

                <option>
                  BBA
                </option>

                <option>
                  BCOM
                </option>

                <option>
                  BSC Computer Science
                </option>

              </select>
            </>

          )}

          <select
            value={experience}
            onChange={(e) =>
              setExperience(
                e.target.value
              )
            }
            className="border p-3 rounded-lg"
          >
            <option value="">
              Select Experience
            </option>

            <option>
              Fresher
            </option>

            <option>
              1 Year
            </option>

            <option>
              2 Years
            </option>

            <option>
              3 Years
            </option>

            <option>
              4 Years
            </option>

            <option>
              5+ Years
            </option>

          </select>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg"
          >
            Submit Application
          </button>

        </form>

      </div>

    </div>
  );
}

export default ApplyJob;