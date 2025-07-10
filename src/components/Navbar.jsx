import { NavLink } from "react-router-dom";
// import { logoWhite } from "../assets";

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-blue-600 border-b border-white/[.5] text-sm py-3 sm:py-0">
      <nav
        className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        {/* BRANDING / SIDEBAR BUTTON */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* <a className="bg-transparent  self-start rounded-full h-10 w-10 border border-white "></a> */}
            <NavLink
              className="  whitespace-nowrap  text-xl font-semibold text-white"
              href="#"
              aria-label="Brand"
            >
              {/* Platinum Grants */}
              <h1>Idle Savings</h1>
              {/* <img className="w-40" src={logoWhite} alt="" /> */}
            </NavLink>
          </div>
          {/* <img src={logo} className="w-0" alt="" /> */}

          {/* {sidebar} */}
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-white/[.5] font-medium text-white/[.5] shadow-sm align-middle hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
            {/* MAIN LINKS */}
            <NavLink
              to={"/"}
              data-hs-collapse="#navbar-collapse-with-animation"
              className="font-medium text-white sm:py-6 hs-collapse-toggle "
              aria-current="page"
            >
              Home
            </NavLink>
            {/* <NavLink
              to={"/aboutus"}
              data-hs-collapse="#navbar-collapse-with-animation"
              className="font-medium text-white/[.8] hover:text-white sm:py-6 hs-collapse-toggle "
              href="#"
            >
              About Us
            </NavLink> */}
            {/* <a className="font-medium text-white/[.8] hover:text-white sm:py-6" href="#">Work</a>
        <a className="font-medium text-white/[.8] hover:text-white sm:py-6" href="#">Blog</a> */}

            {/* POPOVER */}
            {/* <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
              {!path.includes("/application") && (
                <NavLink to={"/application"}>
                  <button
                    type="button"
                    data-hs-collapse="#navbar-collapse-with-animation"
                    className="hs-collapse-toggle flex items-center sm:w-full bg-white py-2 px-4 rounded-md text-blue-600 hover:text-blue-700 ring hover:ring-blue-200 font-medium transition-all duration-100 ease-linear"
                  >
                    Apply
                    <svg
                      className="ml-2 w-2.5 h-2.5"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </button>
                </NavLink>
              )}
            </div> */}

            {/* {Login Button} */}
            <NavLink
              to={"/login"}
              data-hs-collapse="#navbar-collapse-with-animation"
              className="flex hs-collapse-toggle  items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-l sm:border-white/[.3] sm:my-6 sm:pl-6"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              Log in
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
