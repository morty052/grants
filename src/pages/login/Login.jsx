// import { logo } from "../../assets";
import { useState } from "react";
import { message } from "antd";

const Login = () => {
  const [email, setemail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !email.includes("@")) {
      message.error("Please enter a valid email");
      setLoading(false);
      return;
    }
    // const query = `*[_type == "applicants" && email == "${email}"]`;
    // const user = await client.fetch(query).then((res) => res);
    // console.log(user);
    // if (user?.length < 1) {
    //   setLoading(false);
    //   return message.error("Check your email and try again");
    // }
    // setTimeout(() => {
    //   setLoading(false);
    //   navigate(`/applicationstatus/${user?.[0]._id}`);
    // }, 2000);
    setTimeout(() => {
      setLoading(false);
      message.error("No Account found with that email");
    }, 2000);
  };

  return (
    <div className="relative py-16">
      <div className="container relative m-auto  text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-3xl border border-gray-100  bg-white  shadow-2xl shadow-gray-600/10 ">
            <div className="p-8 py-12 sm:p-16">
              <div className="space-y-4">
                {/* <img
                  src={logo}
                  loading="lazy"
                  className="w-20"
                  alt="tailus logo"
                /> */}
                <h1 className="text-xl font-bold text-blue-600">
                  Idle savings
                </h1>
                <h2 className="mb-8 sm:text-xl font-bold text-gray-800 ">
                  Sign in to your account.
                </h2>
              </div>
              <div className="py-4">
                <input
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="text"
                  placeholder="Enter your email."
                  className="py-2 px-2 rounded-full w-full placeholder:text-center placeholder:text-sm text-center"
                />
              </div>
              <div className="mt-6 grid space-y-4">
                <button
                  onClick={() => handleSubmit()}
                  className="group  before:hover:bg-blue-600 relative flex h-11 items-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-white   before:border before:border-gray-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100"
                >
                  <span className="w-full relative flex justify-center items-center gap-3 text-base font-medium text-gray-600 ">
                    {/* <img src="images/google.svg" class="absolute left-0 w-5" alt="google logo" /> */}
                    <span className=" group-hover:text-white">
                      {!loading
                        ? "Continue with Email"
                        : "Fetching Application..."}
                    </span>
                  </span>
                </button>
              </div>

              <div className="mt-20 space-y-4 text-center text-gray-600  sm:-mb-8">
                <p className="text-xs">
                  Secured by AWS Server protocol
                  {/* <a href="#" class="underline">Privacy and Cookie Statement</a>. */}
                </p>
                {/* <p class="text-xs">
                This site is protected by reCAPTCHA and the
                <a href="#" class="underline">Google Privacy Policy</a> and
                <a href="#" class="underline">Terms of Service</a> apply.
              </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
