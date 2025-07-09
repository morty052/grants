import { NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { client } from "../../lib/client";
import { checkmark } from "../../assets";

const ApplicationComplete = () => {
  // const [applicant, setapplicant] = useState(null)
  // const id = useParams().id

  // const fetchApplicant = async () => {
  //   const query = `*[_type == "applicants" && _id == "${id}"]`
  //   const applicant = await client.fetch(query).then(res => res)
  //   console.log(applicant)
  //   setapplicant(applicant[0])
  // }

  // useEffect(() => {
  //   fetchApplicant()

  // }, [])

  return (
    <div className="min-h-screen bg-[#38bdf8]    ">
      <div className="container grid place-items-center mx-auto pt-40 max-w-xl px-4  ">
        <div className="flex justify-center">
          <img src={checkmark} alt="" className="h-40 w-40" />
        </div>
        <p className="text-3xl text-center text-gray-50 my-2">
          Application Submitted
        </p>
        <p className=" text-sm text-center text-gray-50">
          Keep an eye on your email for updates on your application from
          admin@platinumgrants.com.
          {/* you can also track your application by
          signing in using the email on your application.{" "} */}
        </p>
        <div className="py-4 flex justify-center">
          <NavLink to={"/"}>
            <button
              onClick={() => window.history.replaceState(null, null, "/")}
              // onClick={() => window.location.replace("/")}
              className=" border border-white px-6 text-white py-2 rounded-2xl"
            >
              Exit &#8594;
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ApplicationComplete;
