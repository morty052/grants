// import ListBox from "./ListBox";
// import { undp } from "../../assets";
import { useState } from "react";
// import { client } from "../../lib/client";
import { message } from "antd";
import { Footer } from "../../components";
import { applyhero } from "../../assets";

const ApplicationPage = () => {
  // const list = [
  //   { name: "Select Grant Type" },
  //   { name: "Educational Grant" },
  //   { name: "Business Grant" },
  //   { name: "Healthcare Grant" },
  //   { name: "Personal Grant" },
  //   { name: "Home Development Grant" },
  // ];

  // const genders = [
  //   { name: "Select Gender" },
  //   { name: "Female" },
  //   { name: "Male" },
  //   { name: "I rather not say" },
  // ];

  // const accounts = [{ name: "Checking" }, { name: "Savings" }];

  // const paymentmethods = [{ name: "Direct Deposit" }, { name: "Debit Card" }];

  // const states = [
  //   { name: 'Direct Deposit' },
  //   { name: 'Debit Card' },
  // ]

  const ApplicationHero = () => {
    return (
      <>
        {/* <!-- Hero --> */}
        <div className="max-w-[85rem] py-4 mx-auto px-4 sm:px-6 sm:py-10  lg:px-8">
          {/* <!-- Grid --> */}
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3">
              <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl  ">
                Book A Demo.
              </h1>
              <p className="mt-3 text-lg text-gray-800 ">
                Unlock unlimited investment potential with Idle Savings.{" "}
              </p>

              {/* <div
                id="applybutton"
                className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3"
              >
                <a
                  href="#applicationform"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 "
                >
                  Apply Now
                </a>
              </div> */}

              {/* <div className=" mt-6 lg:mt-12">
                <span className="text-xs font-medium text-gray-800 uppercase px-2 ">
                  Sponsored by:
                </span>
                <div className=" mt-1 flex sm:gap-x-2 items-center">
                  <img className="w-20 h-20" src={undp} alt="" />
                  <h3 className=" text-[#006eb5] font-semibold sm:text-2xl">
                    United Nations <br />
                    Development Programme
                  </h3>
                </div>
              </div> */}
            </div>
            {/* <!-- End Col --> */}

            <div className="lg:col-span-4 mt-4 lg:mt-0">
              <img
                className="w-full rounded-xl"
                src={applyhero}
                alt="Image Description"
              />
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Hero --> */}
      </>
    );
  };

  const ApplicationForm = () => {
    //  const [grant, setGrant] = useState();
    const [applicant, setapplicant] = useState({
      _type: "applicants",
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      street: "",
      city: "",
      zip: "",
      state: "",
      phone: "",
      accountname: "",
      accountnumber: "",
      bankname: "",
      routingnumber: "",
      ssn: "",
      dob: "",
    });
    // const [grant, setgrant] = useState("");
    // const [gender, setGender] = useState("");
    // const [paymentMethod, setPaymentMethod] = useState("");
    // const [approved, setapproved] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [submitting, setSubmitting] = useState(false);
    // const [submittedFront, setsubmittedFront] = useState(false);
    // const [submittedBack, setsubmittedBack] = useState(false);
    // const dlfront = localStorage.getItem("dlfront");
    // const dlback = localStorage.getItem("dlback");

    // const FetchAddress = async (e) => {
    //   setStreet(e);

    //   if (e.length < 5) {
    //     return;
    //   }
    //   const url =
    //     "https://autocomplete-usa.p.rapidapi.com/marketplace/autocomplete/usa/addresses/6185%20Gar";
    //   const options = {
    //     method: "GET",
    //     headers: {
    //       "X-RapidAPI-Key":
    //         "b53656c636msh7f1b82d33b1f3a2p129a1fjsn30c3e6c25735",
    //       "X-RapidAPI-Host": "autocomplete-usa.p.rapidapi.com",
    //     },
    //   };

    //   try {
    //     const response = await fetch(url, options);
    //     const result = await response.text();
    //     console.log(result);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // const doc = {
    //   ...applicant,
    //   dlback: {
    //     _type: "file",
    //     asset: {
    //       _type: "reference",
    //       _ref: `${dlback}`,
    //     },
    //   },
    //   dlfront: {
    //     _type: "file",
    //     asset: {
    //       _type: "reference",
    //       _ref: `${dlfront}`,
    //     },
    //   },
    //   grant: `${grant?.name}`,
    //   gender: `${gender?.name}`,
    // };

    // const LoadingStatus = () => {
    //   return (
    //     <>
    //       <div className="flex items-center gap-x-4">
    //         <p>Uploading file...</p>
    //         <div className="h-6 w-6 after:absolute after:top-[50%] after:h-2 after:w-2 after:rounded-full after:bg-white  bg-blue-600 rounded-full animate-spin  relative before:absolute before:inset-0 before:bg-transparent before:h-6 before:w-6 before:rounded-full  before:border-4"></div>
    //       </div>
    //     </>
    //   );
    // };

    // const DLfrontInput = ({ onChange, id }) => {
    //   const [fileName, setFileName] = useState("");
    //   // const [loading, setLoading] = useState(false);

    //   const handleFileChange = async (e) => {
    //     const file = await e.target.files[0];
    //     if (file) {
    //       setFileName(file.name);
    //       await client.assets.upload(`file`, file).then((res) => {
    //         localStorage.setItem("dlfront", res._id);
    //         //  setDisabled(false)
    //         message.success("File Uploaded");
    //         console.log(res);
    //         setsubmittedFront(true);
    //       });
    //       console.log(file.name);

    //       //  onChange(file);
    //     } else {
    //       setFileName("");
    //       message.error("Please select a supported file");
    //     }
    //   };

    //   return (
    //     <div>
    //       {/* <input id={id} className='hidden' type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} /> */}
    //       {
    //         <input
    //           onChange={handleFileChange}
    //           type="file"
    //           name=""
    //           accept=".png, .JPEG, .docx,JPG"
    //           className="block w-full border cursor-pointer border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
    //         file:bg-transparent file:border-0
    //         file:bg-gray-100 file:mr-4
    //         file:py-2 file:px-3
    //        "
    //         />
    //       }
    //       {/* {loading && <LoadingStatus/>} */}
    //       {/* {submited && <p>Selected file: {fileName }</p>} */}
    //     </div>
    //   );
    // };

    // const DLbackInput = ({ onChange, id }) => {
    //   const [fileName, setFileName] = useState("");
    //   const [loading, setLoading] = useState(false);
    //   const [submited, setsubmited] = useState(false);

    //   const handleFileChange = async (e) => {
    //     const file = await e.target.files[0];

    //     if (file) {
    //       setFileName(file.name);
    //       const { asset } = await client.assets
    //         .upload(`file`, file)
    //         .then((res) => {
    //           localStorage.setItem("dlback", res._id);
    //           message.success("File Uploaded");
    //           console.log(res);
    //           setsubmittedBack(true);
    //         });
    //       console.log(file.name);

    //       //  onChange(file);
    //     } else {
    //       setFileName("");
    //       message.error("Please select a supported file");
    //     }
    //   };

    //   return (
    //     <div className=" cursor-pointer">
    //       {/* <input id={id} className='hidden' type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} /> */}
    //       {
    //         <input
    //           onChange={handleFileChange}
    //           type="file"
    //           name=""
    //           accept=".png, .JPEG, .docx, JPG"
    //           className="block w-full border cursor-pointer border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500
    //         file:bg-transparent file:border-0
    //         file:bg-gray-100 file:mr-4
    //         file:py-2 file:px-3
    //        "
    //         />
    //       }
    //       {/* {loading && <LoadingStatus/>}
    //         {submited && <p>Selected file: {fileName }</p>} */}
    //     </div>
    //   );
    // };

    // function name(params) {
    //   return (
    //     <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
    //       <div className="sm:col-span-12">
    //         <h2 className="text-lg font-semibold text-gray-800 ">
    //           Personal Information
    //         </h2>
    //       </div>

    //       {!submittedFront ? (
    //         <>
    //           <div className="sm:col-span-3">
    //             <label
    //               htmlFor=""
    //               className="inline-block text-sm font-medium text-gray-500 mt-2.5"
    //             >
    //               State ID/License Front <span className="text-red-600">*</span>
    //             </label>
    //           </div>

    //           <div className="sm:col-span-9">
    //             <label htmlFor="" className="sr-only">
    //               Choose file
    //             </label>
    //             <DLfrontInput />
    //           </div>
    //         </>
    //       ) : (
    //         <>
    //           <div className="flex  sm:grid items-center sm:grid-cols-12 sm:col-span-12 ">
    //             <div className="sm:col-span-3">
    //               <label
    //                 htmlFor=""
    //                 className="inline-block text-sm font-medium text-gray-500 mt-2.5"
    //               >
    //                 State ID/License Front{" "}
    //                 <span className="text-red-600">*</span>
    //               </label>
    //             </div>
    //             <div className="sm:col-span-9 sm:col-start-4 pl-1">
    //               <label htmlFor="" className="sr-only">
    //                 Choose file
    //               </label>
    //               <div className="block px-4 py-2 w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500">
    //                 <a className="flex items-center gap-x-2 font-normal text-gray-800">
    //                   Uploaded{" "}
    //                   <span>
    //                     <FaCheck className="text-green-300" />
    //                   </span>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </>
    //       )}

    //       {!submittedBack ? (
    //         <>
    //           <div className="sm:col-span-3">
    //             <label
    //               htmlFor=""
    //               className="inline-block text-sm font-medium text-gray-500 mt-2.5"
    //             >
    //               State ID/License Back <span className="text-red-600">*</span>
    //             </label>
    //           </div>

    //           <div className="sm:col-span-9">
    //             <label htmlFor="" className="sr-only">
    //               Choose file
    //             </label>
    //             <DLbackInput />
    //           </div>
    //         </>
    //       ) : (
    //         <>
    //           <div className="flex  sm:grid items-center sm:grid-cols-12 sm:col-span-12 ">
    //             <div className="sm:col-span-3">
    //               <label
    //                 htmlFor=""
    //                 className="inline-block text-sm font-medium text-gray-500 mt-2.5"
    //               >
    //                 State ID/License Back{" "}
    //                 <span className="text-red-600">*</span>
    //               </label>
    //             </div>
    //             <div className="sm:col-span-9 sm:col-start-4 pl-1">
    //               <label htmlFor="" className="sr-only">
    //                 Choose file
    //               </label>
    //               <div className="block px-4 py-2 w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500">
    //                 <a className="flex items-center gap-x-2 font-normal text-gray-800">
    //                   Uploaded{" "}
    //                   <span>
    //                     <FaCheck className="text-green-300" />
    //                   </span>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </>
    //       )}
    //       {/* <!-- End Col --> */}

    //       {/* {DOB} */}
    //       <div className="sm:col-span-3">
    //         <div className="inline-block">
    //           <label
    //             htmlFor=""
    //             className="inline-block text-sm font-medium text-gray-500 mt-2.5"
    //           >
    //             Date of birth: <span className="text-red-600">*</span>
    //           </label>
    //         </div>
    //       </div>
    //       {/* <!-- End Col --> */}

    //       {/* DOB */}
    //       <div className="sm:col-span-9">
    //         <input
    //           onChange={(e) => {
    //             setapplicant((prev) => {
    //               return {
    //                 ...prev,
    //                 dob: e.target.value,
    //               };
    //             });
    //           }}
    //           type="date"
    //           className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500   "
    //           rows="6"
    //           placeholder="Add a cover letter or anything else you want to share."
    //         />
    //       </div>
    //       {/* <!-- End Col --> */}

    //       {/* {SSN} */}
    //       <div className="sm:col-span-3">
    //         <div className="inline-block">
    //           <label
    //             htmlFor=""
    //             className="inline-block text-sm font-medium text-gray-500 mt-2.5"
    //           >
    //             Social Security Number: <span className="text-red-600">*</span>
    //           </label>
    //         </div>
    //       </div>
    //       {/* <!-- End Col --> */}

    //       <div className="sm:col-span-9">
    //         <input
    //           onChange={(e) => {
    //             setapplicant((prev) => {
    //               return {
    //                 ...prev,
    //                 ssn: e.target.value,
    //               };
    //             });
    //           }}
    //           type="password"
    //           className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 "
    //           rows="6"
    //           placeholder="**-****-***."
    //         />
    //       </div>
    //       {/* <!-- End Col --> */}
    //     </div>
    //   );
    // }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(applicant);
      if (
        !applicant.firstname ||
        !applicant.lastname ||
        !applicant.email ||
        // !applicant.street ||
        // !applicant.state ||
        // !applicant.zip ||
        // !applicant.dob ||
        // !applicant.ssn ||
        // !dlback ||
        // !dlfront ||
        // !approved ||
        !applicant.phone
      ) {
        return message.error("Please fill all required fields");
      }

      // client.create(doc).then((res) => {
      //   console.log(res);
      //   message.success("Application Submitted");
      //   setTimeout(() => {
      //     window.location.assign(`/applicant/${res._id}`);
      //   }, 1000);
      // });
      message.success("Application Submitted");
      setTimeout(() => {
        window.location.assign(`/applicant/${50}`);
      }, 500);
    };
    return (
      <div className="max-w-[85rem]  sm:px-6 lg:px-8  mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid  items-center gap-4">
          <div className="relative">
            {/* <!-- Card --> */}
            <div id="applicationform" className="8 sm:px-12 lg:px-16 sm:py-8">
              {/* <h1 className="text-3xl text-center font-semibold">
                Start Application
              </h1> */}
              {/* <p className="mt-1 text-xs text-center text-gray-700 sm:text-base leading-tight ">
                To book a Demo you must be above 18 years old.{" "}
                <br className="hidden sm:block" /> by filling out this
                application you certify you are over 18.
              </p> */}
            </div>

            {/* form */}
            <div className="max-w-3xl px-4 py-4 sm:px-6 lg:px-8  mx-auto ">
              {/* <!-- Card --> */}
              <div className="bg-white rounded-xl shadow p-4 sm:p-7 ">
                <form>
                  {/* <!--Name and email Section --> */}
                  <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
                    <div className="sm:col-span-12">
                      <div className="flex flex-col  items-center sm:flex-row sm:justify-between">
                        <h2 className="text-sm font-semibold text-gray-800 ">
                          Please fill out the following information.
                        </h2>
                        {/* <h2 className="text-xs font-semibold text-gray-600 ">
                          Fields Marked with{" "}
                          <span className="text-red-600">*</span> are required.
                        </h2> */}
                      </div>
                    </div>
                    {/* <!-- End Col --> */}

                    {/* <div className="sm:col-span-3">
                      <div className="inline-block">
                        <label
                          htmlFor="af-submit-application-current-company"
                          className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                        >
                          Grant type <span className="text-red-600">*</span>
                        </label>
                      </div>
                    </div> */}
                    {/* <!-- End Col --> */}

                    {/* <div className="sm:col-span-9">
                      <ListBox
                        active={grant}
                        setActive={setgrant}
                        list={list}
                        z={"z-50"}
                      />
                    </div> */}
                    {/* <!-- End Col --> */}

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="af-submit-application-full-name"
                        className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                      >
                        Full name <span className="text-red-600">*</span>
                      </label>
                    </div>
                    {/* <!-- End Col --> */}

                    <div className="sm:col-span-9">
                      <div className="sm:flex">
                        <input
                          onChange={(e) => {
                            setapplicant((prev) => {
                              return {
                                ...prev,
                                firstname: e.target.value,
                              };
                            });
                          }}
                          type="text"
                          placeholder="first name"
                          className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 "
                        />
                        <input
                          onChange={(e) => {
                            setapplicant((prev) => {
                              return {
                                ...prev,
                                lastname: e.target.value,
                              };
                            });
                          }}
                          placeholder="last name"
                          type="text"
                          className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500  "
                        />
                      </div>
                    </div>
                    {/* <!-- End Col --> */}

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="af-submit-application-email"
                        className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                      >
                        Email <span className="text-red-600">*</span>
                      </label>
                    </div>
                    {/* <!-- End Col --> */}

                    <div className="sm:col-span-9">
                      <input
                        onChange={(e) => {
                          setapplicant((prev) => {
                            return {
                              ...prev,
                              email: e.target.value,
                            };
                          });
                        }}
                        type="email"
                        placeholder="email address"
                        className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
                      />
                    </div>
                    {/* <!-- End Col --> */}

                    <div className="sm:col-span-3">
                      <div className="inline-block">
                        <label
                          htmlFor="af-submit-application-phone"
                          className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                        >
                          Phone <span className="text-red-600">*</span>
                        </label>
                      </div>
                    </div>
                    {/* <!-- End Col --> */}

                    <div className="sm:col-span-9">
                      <input
                        onChange={(e) => {
                          setapplicant((prev) => {
                            return {
                              ...prev,
                              phone: e.target.value,
                            };
                          });
                        }}
                        placeholder="Phone number"
                        type="text"
                        className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500   "
                      />
                    </div>
                    {/* <!-- End Col --> */}

                    {/* <div className="sm:col-span-3">
                      <div className="inline-block">
                        <label
                          htmlFor="af-submit-application-current-company"
                          className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                        >
                          Gender
                        </label>
                      </div>
                    </div> */}
                    {/* <!-- End Col --> */}

                    {/* <div className="sm:col-span-9">
                      <ListBox
                        z={"z-[80]"}
                        active={gender}
                        setActive={setGender}
                        list={genders}
                      />
                    </div> */}
                  </div>
                  {/* <!-- End Section --> */}

                  {/* <!--Address Section --> */}
                  <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 pt-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
                    {/* <div className="sm:col-span-12">
                      <h2 className="text-lg font-semibold text-gray-800 ">
                        Address Information{" "}
                        <span className="text-red-600">*</span>
                      </h2>
                    </div> */}
                    {/* <!-- End Col --> */}

                    {/* <div className="sm:col-span-3">
                      <label className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                        Street Address <span className="text-red-600">*</span>
                      </label>
                    </div> */}
                    {/* <!-- End Col --> */}

                    {/* <div className="sm:col-span-9">
                      <input
                        onChange={(e) => {
                          setapplicant((prev) => {
                            return {
                              ...prev,
                              street: e.target.value,
                            };
                          });
                        }}
                        type="text"
                        className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
                      />
                    </div> */}
                    {/* <!-- End Col --> */}

                    {/* <div className="sm:col-span-3">
                      <label
                        htmlFor="af-submit-application-twitter-url"
                        className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                      >
                        Adddress line 2
                      </label>
                    </div> */}
                    {/* <!-- End Col --> */}

                    {/* <div className="sm:col-span-9">
                      <input
                        type="text"
                        className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
                      />
                    </div> */}
                    {/* <!-- End Col --> */}

                    {/* <div className="  items-center  gap-x-4 grid grid-cols-6 grid-flow-row sm:grid-cols-9 sm:col-start-4 sm:col-span-9  ">
                      <div className="col-span-6 sm:col-span-3">
                        <label className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                          City
                        </label>
                        <input
                          onChange={(e) => {
                            setapplicant((prev) => {
                              return {
                                ...prev,
                                city: e.target.value,
                              };
                            });
                          }}
                          type="text"
                          className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
                        />
                      </div>
                      <div className="col-span-3 ">
                        <label className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                          State <span className="text-red-600">*</span>
                        </label>
                        <input
                          onChange={(e) => {
                            setapplicant((prev) => {
                              return {
                                ...prev,
                                state: e.target.value,
                              };
                            });
                          }}
                          type="text"
                          className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
                        />
                      </div>
                      <div className="col-span-3">
                        <label className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                          Zip <span className="text-red-600">*</span>
                        </label>
                        <input
                          onChange={(e) => {
                            setapplicant((prev) => {
                              return {
                                ...prev,
                                zip: e.target.value,
                              };
                            });
                          }}
                          type="text"
                          className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
                        />
                      </div>
                    </div> */}
                    {/* <!-- End Col --> */}

                    {/* <div class="sm:col-span-9">
          <input type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "/>
        </div> */}
                    {/* <!-- End Col --> */}

                    {/* <div class="sm:col-span-3">
          <label for="af-submit-application-portfolio-url" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Portfolio URL
          </label>
        </div> */}
                    {/* <!-- End Col --> */}

                    {/* <div class="sm:col-span-9">
          <input id="af-submit-application-portfolio-url" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "/>
        </div> */}
                    {/* <!-- End Col --> */}

                    {/* <div class="sm:col-span-3">
          <label for="af-submit-application-other-website" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Other website
          </label>
        </div> */}
                    {/* <!-- End Col --> */}

                    {/* <div class="sm:col-span-9">
          <input id="af-submit-application-other-website" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "/>
        </div> */}
                    {/* <!-- End Col --> */}

                    {/* <div class="sm:col-start-4 sm:col-span-8">
          <a class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../docs/index.html">
            <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            Add URL
          </a>
        </div> */}
                  </div>
                  {/* <!-- End Section --> */}

                  {/* <!-- Section --> */}
                  {/* <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
                    <div className="sm:col-span-12">
                      <h2 className="text-lg font-semibold text-gray-800 ">
                        Before sending your application, please let us know...
                      </h2>
                    </div>
                  </div> */}
                  {/* <!-- End Section --> */}

                  {/* <!-- Section --> */}
                  {/* <div className=" first:pt-0 last:pb-0  border-gray-200 ">
                    <div className="mt-5 flex">
                      <input
                        value={approved}
                        onChange={() => setapproved(!approved)}
                        type="checkbox"
                        id="privacy-check"
                        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600  focus:ring-blue-500 cursor-pointer   "
                      />
                      <label
                        htmlFor="privacy-check"
                        className="text-sm cursor-pointer text-gray-500 ml-2 "
                      >
                        Allow us to process your personal information.
                      </label>{" "}
                      <span className="text-red-600">*</span>
                    </div>
                  </div> */}
                  {/* <!-- End Section --> */}

                  <button
                    onClick={(e) => handleSubmit(e)}
                    type="button"
                    className="py-3 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm "
                  >
                    {!submitting ? "Book Demo" : "Booking..."}
                  </button>
                </form>
              </div>
              {/* <!-- End Card --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
    );
  };

  return (
    <>
      <div className="max-w-[85rem] py-4 mx-auto px-4 sm:px-6 sm:py-10  lg:px-8">
        <ApplicationHero />
        <ApplicationForm />
        <div className="py-8 lg:py-16"></div>
      </div>
      <Footer />
    </>
  );
};

export default ApplicationPage;

// function xame(params) {
//   return (
//     <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
//       <div className="sm:col-span-12">
//         <h2 className="text-lg font-semibold text-gray-800 ">
//           Account Information
//         </h2>
//         <p className="text-gray-700 text-xs">Direct deposit details</p>
//       </div>
//       {/* <!-- End Col --> */}
//       <div className="sm:col-span-3">
//         <label
//           htmlFor="af-submit-application-linkedin-url"
//           className="inline-block text-sm font-medium text-gray-500 mt-2.5"
//         >
//           How to receive grant <span className="text-red-600">*</span>
//         </label>
//       </div>
//       {/* <!-- End Col --> */}

//       <div className="sm:col-span-9">
//         {/* <input onChange={(e) => {
//                 setapplicant(prev => {
//                 return {
//                     ...prev,
//                     accountname:e.target.value
//                 }
//                 })
//             }}   type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "/> */}
//         <ListBox
//           active={paymentMethod}
//           setActive={setPaymentMethod}
//           list={paymentmethods}
//         />
//       </div>

//       {paymentMethod?.name != "Debit Card" && (
//         <>
//           <div className="sm:col-span-3">
//             <label
//               htmlFor="af-submit-application-linkedin-url"
//               className="inline-block text-sm font-medium text-gray-500 mt-2.5"
//             >
//               Account Name <span className="text-red-600">*</span>
//             </label>
//           </div>
//           {/* <!-- End Col --> */}

//           {/* {account name} */}
//           <div className="sm:col-span-9">
//             <input
//               onChange={(e) => {
//                 setapplicant((prev) => {
//                   return {
//                     ...prev,
//                     accountname: e.target.value,
//                   };
//                 });
//               }}
//               type="text"
//               className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
//             />
//           </div>
//           {/* <!-- End Col --> */}

//           <div className="sm:col-span-3">
//             <label
//               htmlFor="af-submit-application-twitter-url"
//               className="inline-block text-sm font-medium text-gray-500 mt-2.5"
//             >
//               Account Number <span className="text-red-600">*</span>
//             </label>
//           </div>
//           {/* <!-- End Col --> */}

//           {/* {account number} */}
//           <div className="sm:col-span-9">
//             <input
//               onChange={(e) => {
//                 setapplicant((prev) => {
//                   return {
//                     ...prev,
//                     accountnumber: e.target.value.toString(),
//                   };
//                 });
//               }}
//               type="number"
//               className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
//             />
//           </div>
//           {/* <!-- End Col --> */}

//           <div className="sm:col-span-3">
//             <label className="inline-block text-sm font-medium text-gray-500 mt-2.5">
//               Routing Number <span className="text-red-600">*</span>
//             </label>
//           </div>
//           {/* <!-- End Col --> */}

//           {/* {routing number} */}
//           <div className="sm:col-span-9">
//             <input
//               onChange={(e) => {
//                 setapplicant((prev) => {
//                   return {
//                     ...prev,
//                     routingnumber: e.target.value.toString(),
//                   };
//                 });
//               }}
//               type="number"
//               className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
//             />
//           </div>
//           {/* <!-- End Col --> */}

//           <div className="sm:col-span-3">
//             <label
//               htmlFor="af-submit-application-portfolio-url"
//               className="inline-block text-sm font-medium text-gray-500 mt-2.5"
//             >
//               Bank Name <span className="text-red-600">*</span>
//             </label>
//           </div>
//           {/* <!-- End Col --> */}

//           {/* {bankname} */}
//           <div className="sm:col-span-9">
//             <input
//               onChange={(e) => {
//                 setapplicant((prev) => {
//                   return {
//                     ...prev,
//                     bankname: e.target.value,
//                   };
//                 });
//               }}
//               type="text"
//               className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
//             />
//           </div>
//           {/* <!-- End Col --> */}

//           <div className="sm:col-span-3">
//             <label
//               htmlFor="af-submit-application-other-website"
//               className="inline-block text-sm font-medium text-gray-500 mt-2.5"
//             >
//               Account Type <span className="text-red-600">*</span>
//             </label>
//           </div>
//           {/* <!-- End Col --> */}

//           <div className="sm:col-span-9">
//             <ListBox list={accounts} />
//             {/* <input id="af-submit-application-other-website" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "/> */}
//           </div>
//         </>
//       )}
//       {/* <!-- End Col --> */}
//     </div>
//   );
// }
