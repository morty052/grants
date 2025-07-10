export default function Faq() {
  return (
    <>
      {/* <!-- FAQ --> */}
      <div
        id="faq"
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      >
        {/* <!-- Title --> */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
            Answers to popular questions.
          </h2>
          <p className="mt-1 text-gray-600 ">
            Answers to the most frequently asked questions.
          </p>
        </div>
        {/* <!-- End Title --> */}

        <div className="max-w-2xl mx-auto">
          {/* <!-- Accordion --> */}
          <div className="hs-accordion-group">
            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6  active"
              id="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500  "
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
              >
                How do i get started?
                <svg
                  className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
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
                  />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <p className="text-gray-800 ">
                  Getting started is as easy as booking a demo to get you up and
                  running
                </p>
              </div>
            </div>

            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 "
              id="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500  "
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
              >
                How do i receive my payouts?
                <svg
                  className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
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
                  />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <p className="text-gray-800 ">
                  Our payout options include secure direct deposits and
                  traditional cheque payments.
                </p>
              </div>
            </div>

            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 "
              id="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500  "
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
              >
                What kind of investment opportunities are available?
                <svg
                  className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
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
                  />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
              >
                <p className="text-gray-800 ">
                  We offer over 200 different investment plans you can choose
                  from.
                </p>
              </div>
            </div>

            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 "
              id="hs-basic-with-title-and-arrow-stretched-heading-four"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500  "
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
              >
                Are they any fees involved?
                <svg
                  className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
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
                  />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
              >
                <p className="text-gray-800 ">
                  We only take 8% when you invest with us, which is better than
                  traditional financial institutions.
                </p>
              </div>
            </div>

            {/* <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 "
              id="hs-basic-with-title-and-arrow-stretched-heading-five"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500  "
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
              >
                Can i view my application status?
                <svg
                  className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
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
                  />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
              >
                <p className="text-gray-800 ">
                  Yes after filling out your application you can login to view
                  your application status.
                </p>
              </div>
            </div> */}
          </div>
          {/* <!-- End Accordion --> */}
        </div>
      </div>
      {/* <!-- End FAQ --> */}
    </>
  );
}
