import "./App.css";
import { FaCirclePlay } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { BiSolidBell } from "react-icons/bi";
import { HiMiniFire } from "react-icons/hi2";
function App() {
  return (
    <>
      <div className="container">
        {/* navbar */}
        <div className="navbar">
          <nav class=" ">
            <div class="max-w-screen-l flex  items-center justify-between mx-auto p-4">
              <img
                src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"
                class="h-11"
                alt="Flowbite Logo"
              />

              <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  type="button"
                  class="text-black bg-white hover:outline outline-1 font-large rounded-lg text-xl px-4 py-2 text-center "
                >
                 Buy Template
                </button>
              </div>

              <div
                class="items-center justify-between hidden w-full  md:flex md:w-auto md:order-1"
                id="navbar-cta"
              >
                <ul class="flex  ms-80 flex-col  p-9 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-20 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
                  <li>
                    <a
                      href="#"
                      class=" text-black  block py-2 px-3  md:p-0  rounded hover:text-purple-500 "
                      aria-current="page"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-3 md:p-0 text-black  rounded hover:text-purple-500 "
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-3 md:p-0 text-black  rounded hover:text-purple-500 "
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:text-purple-500 "
                    >
                      Testimonial
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <hr class=" h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        </div>

        {/* toast */}
        <div className="toast " data-aos="fade-up" data-aos-duration="1000">
          <div class="max-w-xs py-1 bg-white place-items-center border border-gray-200 rounded-md ">
            <div class="flex ">
              <div class="flex ">
                <p class="flex mx-5 text-purple-500 text-xs font-bold  ">
                  👋 WELCOME TO MANAGE WISE!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="heading-section ">
          {/* main heading */}
          <div className="heading" data-aos="fade-up" data-aos-duration="1000">
            <p>
              Empower your business with <br />
              <span class="stra"> Strategic insights</span>
            </p>
          </div>

          {/* gray-heading */}
          <div
            className="gray-heading"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <p>
              Powerful management platform designed to streamline your business{" "}
              <br />
              <span>operations, boost productivity, and drive success</span>
            </p>
          </div>

          {/* buttons */}
          <div
            className="button-section"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button
              className="border-secondary inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-secondary "
              style={{
                backgroundColor: `#8247FF`,
                color: `white`,
                borderRadius: `18px`,
                height: `56px`,
                width: `211px`,
                fontSize: `20px`,
              }}
            >
              Get Started
            </button>
            <button
              className="border-secondary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-secondary hover:bg-[#E8FBF6] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
              style={{
                backgroundColor: `white`,
                color: `black`,
                borderRadius: `18px`,
                height: `56px`,
                width: `211px`,
                fontSize: `20px`,
              }}
            >
              Whatch Demo
              <FaCirclePlay style={{ display: `flex`, marginLeft: `5px` }} />
            </button>
          </div>

          {/* Image-hero */}
          <div className="image-hero">
            <div
              className="image-container"
              data-aos="fade-down-right"
              data-aos-duration="1000"
            >
              <img
                class="h-auto max-w-full"
                src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048"
                alt="image description"
              />
            </div>
          </div>

          {/* toast */}
          <div className="toast " data-aos="fade-up" data-aos-duration="1000">
            <div class="max-w-xs py-1 bg-white place-items-center border border-gray-200 rounded-md ">
              <div class="flex ">
                <div class="flex ">
                  <p class="flex mx-5 text-purple-500 text-xs font-bold  ">
                    🔥 PREMIUM FEATURES
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* main heading */}
          <div className="heading" data-aos="fade-up" data-aos-duration="1000">
            <p style={{ fontSize: `58px`, fontWeight: `500` }}>
              Discover our product's{" "}
              <span style={{ color: `#fe8162` }}>Capabilities</span>
            </p>
          </div>

          {/* gray-heading */}
          <div
            className="gray-heading"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <p style={{ marginTop: `-22px`, fontSize: `20px` }}>
              Don't settle for mediocrity - embrace the future of management{" "}
              <br />
              <span>with Manage Wise.</span>
            </p>
          </div>

          {/* mid-hero section */}
          <div className="cardimg" data-aos="fade-up" data-aos-duration="1000">
            <div className="card-section">
              <div
                class=" card-section max-w-sm p-6  rounded-lg shadow "
                style={{ paddingTop: `80px`, maxWidth: `700px` }}
              >
                <span style={{ fontSize: `28px`, backgroundColor: `white` }}>
                  ⭐
                </span>

                <h5
                  class="mb-2 text-2xl font-semibold tracking-tight text-black"
                  style={{
                    fontSize: `40px`,
                    fontWeight: `500`,
                    lineHeight: `1.3em`,
                  }}
                >
                  Boost productivity and <br />
                  streamline workflow with <br />
                  us. Enjoy our intuitive <br /> interface and robust <br />
                  features.
                </h5>
              </div>
            </div>
            <div className="img-section">
              {" "}
              <div
                class="max-w-sm bg-white border border-gray-200 "
                style={{ maxWidth: `500px`,borderRadius:`30px`}}
              >
                <img
                  src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024"
                  alt=""
                />

                <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold">Smart Task Management</h5>

                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* img-cards */}
          <div className="three-container">
            <div className="three-imgs" style={{ paddingTop: `40px` }}>
              <div class=" grid-cols-1 sm:grid md:grid-cols-3" style={{}}>
                <div
                  class="mx-3 mt-6 flex flex-col  bg-white border  sm:shrink-0 sm:grow sm:basis-0"
                  style={{ borderRadius: `30px` }}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    class="rounded-t-lg"
                    src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512"
                    alt="Skyscrapers"
                  />

                  <div class="p-6">
                    <h5 class="text-head mb-2 text-xl font-medium leading-tight text-black">
                      Flexible Scheduling
                    </h5>
                    <p class=" text-col mb-2">
                      Stay productive with our flexible <br />
                      scheduling system
                    </p>
                  </div>
                </div>
                <div
                  class="mx-3 mt-6 flex flex-col  bg-white border  sm:shrink-0 sm:grow sm:basis-0"
                  style={{ borderRadius: `30px` }}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    class="rounded-t-lg"
                    src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512"
                    alt="Los Angeles Skyscrapers"
                  />

                  <div class="p-6">
                    <h5 class="text-head mb-2 text-xl font-medium leading-tight text-black">
                      Easy Communication
                    </h5>
                    <p class="text-col mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Collaborate seamlessly with your team <br />
                      in real-time
                    </p>
                  </div>
                </div>
                <div
                  class="mx-3 mt-6 flex flex-col  bg-white border  sm:shrink-0 sm:grow sm:basis-0"
                  style={{ borderRadius: `30px` }}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    class="rounded-t-lg"
                    src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512"
                    alt="Palm Springs Road"
                  />

                  <div class="p-6">
                    <h5 class="text-head mb-2 text-xl font-medium leading-tight text-black">
                      Analytics
                    </h5>
                    <p class=" text-col mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Gain valuable insights with our advanced <br /> analytics
                      feature
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* dark section */}
          <div
            className="dark-container"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <div className="content-section">
              <div
                className="toast-dark "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div
                  class="max-w-xs bg-white  rounded-xl"
                  style={{ width: `150px` }}
                >
                  <div class="flex p-1">
                    <div class="flex-shrink-0">
                      <span style={{ paddingLeft: `4px` }}>🤩</span>
                    </div>
                    <div class="ms-3">
                      <p class="text-l" style={{color:`#8257ff`}}>AND MORE...</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* heading-dark */}
              <div
                className="heading"
                style={{ justifyContent: `left`, marginTop: `30px` }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p
                  style={{
                    color: `white`,
                    fontSize: `58px`,
                    lineHeight: `1em`,
                  }}
                >
                  Explore an array of features that elevate your <br />
                  <span
                    class="stra"
                    style={{ fontSize: `58px`, justifyContent: `left` }}
                  >
                    {" "}
                    Productivity to new heights
                  </span>
                </p>
              </div>
              {/* gray-heading-dark */}
              <div
                className="gray-heading"
                style={{ justifyContent: `left` }}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <p>
                  Discover the tools that will revolutionize the way you <br />
                  <span
                    class="stra"
                    style={{ justifyContent: `left`, color: `#767575` }}
                  >
                    manage and optimize your operations
                  </span>
                </p>
              </div>

              {/* dark-cards */}
              <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                  <div class="flex flex-wrap  sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div
                      class="bg-color-card p-4 md:w-1/3 flex flex-col text-center border border-neutral-800 items-center"
                      style={{
                        borderRadius: `30px`,
                        height: `350px`,
                        width: `400px`,
                      }}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div
                        class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
                        style={{
                          borderRadius: `20px`,
                          backgroundColor: `#8247ff`,
                          height: `60px`,
                          width: `60px`,
                        }}
                      >
                        <FaMobile
                          style={{ fontSize: `28px`, color: `white` }}
                        />
                      </div>
                      <div class="flex-grow">
                        <h2
                          class="text-white text-lg title-font font-medium mb-3"
                          style={{ fontSize: `25px` }}
                        >
                          Cross-Platform <br />
                          Compatibility
                        </h2>
                        <p
                          class="leading-relaxed text-base"
                          style={{ fontSize: `18px`, color: `#767575` }}
                        >
                          Enjoy the flexibility of cross-platform <br />
                          compatibility. Our product works <br />
                          seamlessly across desktop, web, and <br />
                          mobile devices, allowing you to work <br />
                          from your preferred device.
                        </p>
                      </div>
                    </div>
                    <div
                      class="bg-color-card p-4 md:w-1/3 flex flex-col text-center border border-neutral-800 items-center"
                      style={{
                        borderRadius: `30px`,
                        height: `350px`,
                        width: `400px`,
                      }}
                      data-aos="fade-up"
                      data-aos-duration="1400"
                    >
                      <div
                        class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
                        style={{
                          borderRadius: `20px`,
                          backgroundColor: `#8247ff`,
                          height: `60px`,
                          width: `60px`,
                        }}
                      >
                        <BiSolidBell
                          style={{ fontSize: `28px`, color: `white` }}
                        />
                      </div>
                      <div class="flex-grow">
                        <h2
                          class="text-white text-lg title-font font-medium mb-3"
                          style={{ fontSize: `25px` }}
                        >
                          Stay Informed with Essential Notifications
                        </h2>
                        <p
                          class="leading-relaxed text-base"
                          style={{ fontSize: `18px`, color: `#767575` }}
                        >
                          Automate support from first customer <br />
                          contact to closing the ticket. Drastically <br />{" "}
                          improve time to resolution.Automate <br />
                          support from first customer contact to <br /> closing
                          the ticket.
                        </p>
                      </div>
                    </div>
                    <div
                      class="bg-color-card p-4 md:w-1/3 flex flex-col text-center border border-neutral-800 items-center"
                      style={{
                        borderRadius: `30px`,
                        height: `350px`,
                        width: `400px`,
                      }}
                      data-aos="fade-up"
                      data-aos-duration="1800"
                    >
                      <div
                        class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
                        style={{
                          borderRadius: `20px`,
                          backgroundColor: `#8247ff`,
                          height: `60px`,
                          width: `60px`,
                        }}
                      >
                        <HiMiniFire
                          style={{ fontSize: `28px`, color: `white` }}
                        />
                      </div>
                      <div class="flex-grow">
                        <h2
                          class="text-white text-lg title-font font-medium mb-3"
                          style={{ fontSize: `25px` }}
                        >
                          Secure Data Encryption at <br />
                          all times
                        </h2>
                        <p
                          class="leading-relaxed text-base"
                          style={{ fontSize: `18px`, color: `#767575` }}
                        >
                          Trust in our robust data encryption to <br />
                          keep your sensitive information safe and <br />
                          secure. Rest easy knowing your data is <br />{" "}
                          protected at all times.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* toast dark */}
              <div
                className="toast-dark "
                style={{
                  display: `flex`,
                  justifyContent: `center`,
                  alignItems: `center`,
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div
                  class="max-w-xs py-1 px-2 bg-white  rounded-lg"
                  style={{ width: `150px` }}
                >
                  <div class=" toast-centre">
                    <div class="toast-centre">
                      <span style={{ color: `#8247ff` }}>🛠️</span>
                    </div>
                    <div class="ms-2">
                      <p
                        class="text-sm"
                        style={{ color: `#8247ff`, fontWeight: `600` }}
                      >
                        INTEGRATIONS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* dark heading */}
              <div
                className="heading"
                style={{ color: `white`, fontSize: `53px` }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p style={{ textAlign: `justify` }}>
                  Enable integration with <br />
                  other popular tools and <br />
                  <span>platforms</span>
                </p>
              </div>
              {/* gray-topic*/}
              <div
                className="gray-heading"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <p style={{ marginTop: `-22px`, fontSize: `20px` }}>
                  Seamlessly connect and amplify your workflow <br /> by
                  enabling integration with a diverse array of <br />
                  widely-used tools and platforms.
                </p>
              </div>

              {/* img-dark */}
              <div
                className="img-dark"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  class=" dark-img-small h-auto max-w-lg rounded-lg"
                  src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024"
                  alt="image description"
                />
              </div>
            </div>
          </div>
          {/* FAQ container */}
          <div className="faq-container">
            <div className="faq-section">
              {/* faq logo */}
              <div
                className="toast-dark "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div
                  class="max-w-xs bg-white border border-gray-300 rounded-lg"
                  style={{ width: `100px`, color: `#8247ff` }}
                >
                  <div class="flex p-1">
                    <div class="flex-shrink-0">
                      <span style={{ paddingLeft: `4px` }}>🙋‍♀️</span>
                    </div>
                    <div class="ms-3">
                      <p
                        class="text-l"
                        style={{ fontWeight: `500`, fontSize: `15px` }}
                      >
                        FAQ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* faq-heading */}
              <div
                className="heading"
                style={{ justifyContent: `left`, marginTop: `30px` }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p
                  style={{
                    color: `black`,
                    fontSize: `58px`,
                    lineHeight: `1em`,
                  }}
                >
                  Need <br />
                  <span
                    class="stra"
                    style={{ fontSize: `58px`, justifyContent: `left` }}
                  >
                    {" "}
                    Answers?
                  </span>
                </p>
              </div>
              {/* gray-heading */}
              <div className="gray-heading" style={{ justifyContent: `left` }}>
                <p
                  style={{
                    marginTop: `-10px`,
                    fontSize: `20px`,
                    textAlign: `left`,
                  }}
                >
                  Check out our most commonly <br /> asked questions below to
                  find the <br /> information you need.
                </p>
              </div>
            </div>

            <div
              className="faq-questions"
              data-aos="fade-up"
              data-aos-duration="1300"
            >
              <section class="py-10 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                  <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    <div
                      class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
                      style={{
                        borderRadius: `40px`,
                        background: `rgb(247, 248, 253)`,
                      }}
                    >
                      <button
                        type="button"
                        class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                      >
                        <span
                          class="flex text-xl font-semibold text-black"
                          style={{ color: `#8257ff` }}
                        >
                          {" "}
                          What is Manage Wise and what does it offer?{" "}
                        </span>

                        <svg
                          class="w-6 h-6 text-gray-400 rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      <div class="px-4 pb-5 text-gray-500 sm:px-6 sm:pb-6">
                        <p style={{ fontSize: `18px` }}>
                          Amet minim mollit non deserunt ullamco est sit{" "}
                          <a
                            href="#"
                            title=""
                            class="text-blue-600 transition-all duration-200 hover:underline"
                          ></a>{" "}
                          do amet sint. Velit officia consequat duis enim velit
                          mollit.
                        </p>
                      </div>
                    </div>

                    <div
                      class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50"
                      style={{
                        borderRadius: `30px`,
                        background: `rgb(247, 248, 253)`,
                      }}
                    >
                      <button
                        type="button"
                        class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                      >
                        <span class="flex text-lg font-semibold text-black">
                          {" "}
                          Is Manage Wise?{" "}
                        </span>

                        <svg
                          class="w-6 h-6 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      <div class="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                        <p>
                          Amet minim mollit non deserunt ullamco est sit{" "}
                          <a
                            href="#"
                            title=""
                            class="text-blue-600 transition-all duration-200 hover:underline"
                          >
                            aliqua dolor
                          </a>{" "}
                          do amet sint. Velit officia consequat duis enim velit
                          mollit.
                        </p>
                      </div>
                    </div>

                    <div
                      class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50"
                      style={{
                        borderRadius: `30px`,
                        background: `rgb(247, 248, 253)`,
                      }}
                    >
                      <div class="">
                        <button
                          type="button"
                          class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                        >
                          <span class="flex text-lg font-semibold text-black">
                            {" "}
                            Can I cancel my plan?{" "}
                          </span>

                          <svg
                            class="w-6 h-6 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        <div class="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                          <p>
                            Amet minim mollit non deserunt ullamco est sit{" "}
                            <a
                              href="#"
                              title=""
                              class="text-blue-600 transition-all duration-200 hover:underline"
                            >
                              aliqua dolor
                            </a>{" "}
                            do amet sint. Velit officia consequat duis enim
                            velit mollit.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50"
                      style={{
                        borderRadius: `30px`,
                        background: `rgb(247, 248, 253)`,
                      }}
                    >
                      <button
                        type="button"
                        class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                      >
                        <span class="flex text-lg font-semibold text-black">
                          {" "}
                          How can I reach to support?{" "}
                        </span>

                        <svg
                          class="w-6 h-6 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      <div class="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                        <p>
                          Amet minim mollit non deserunt ullamco est sit{" "}
                          <a
                            href="#"
                            title=""
                            class="text-blue-600 transition-all duration-200 hover:underline"
                          >
                            aliqua dolor
                          </a>{" "}
                          do amet sint. Velit officia consequat duis enim velit
                          mollit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* pricing container */}
          <div className="pricing-container">
            <div className="pricing-section">
              {/* toast */}
              <div
                className="toast-dark "
                style={{
                  display: `flex`,
                  justifyContent: `center`,
                  alignItems: `center`,
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div
                  class="max-w-xs py-1 px-2 bg-white border border-gray-300 rounded-lg"
                  style={{ width: `120px` }}
                >
                  <div class=" toast-centre">
                    <div class="toast-centre">
                      <span style={{ color: `#8247ff`, fontSize: `18px` }}>
                        💲
                      </span>
                    </div>
                    <div class="ms-1">
                      <p
                        class="text-sm"
                        style={{ color: `#8247ff`, fontWeight: `600` }}
                      >
                        PRICING
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* heading */}
              <div className="heading">
                <p style={{ fontSize: `58px`, fontWeight: `500` }}>
                  Select your ideal{" "}
                  <span style={{ color: `#fe8162` }}> Pricing </span>plan
                </p>
              </div>
              {/* gray-heading-dark */}
              <div className="gray-heading">
                <p style={{ marginTop: `-22px`, fontSize: `20px` }}>
                  At Manage Wise, we believe in providing you with <br />
                  pricing plans that adapt to your unique needs.
                </p>
              </div>
              <div className="pricing-conatiner">
                <div class="min-h-screen flex justify-center items-center">
                  <div class="">
                    <div class=" flex flex-row">
                      <div
                        class="w-96 p-8 bg-gray-100 text-center rounded-3xl pr-16 shadow-xl"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <h1 class="text-black font-semibold text-2xl">Free</h1>
                        <p class="pt-2 tracking-wide">
                          <span class="text-black align-top">$ </span>
                          <span class="text-3xl font-semibold">0</span>
                          <span class="text-black font-medium">/ month</span>
                        </p>
                        <hr class="mt-4 border-1" />
                        <div class="pt-8">
                          <p class="font-semibold text-black text-left">
                            <span class="material-icons align-middle">✅</span>
                            <span class="pl-2">
                              Access to all basic features
                            </span>
                          </p>
                          <p class="font-semibold text-black text-left pt-5">
                            <span class="material-icons align-middle">✅</span>
                            <span class="pl-2">Reporting and analytics</span>
                          </p>
                          <p class="font-semibold text-black text-left pt-5">
                            <span class="material-icons align-middle">✅</span>
                            <span class="pl-2">
                              <span class="text-black">5 TB</span> cloud storage
                            </span>
                          </p>

                          <a href="#" class="">
                            <p class="w-full py-4 bg-white  border mt-8 rounded-xl text-white">
                              <span class="font-medium text-black">Get Started</span>
                              
                            </p>
                          </a>
                        </div>
                      </div>

                      <div
                        class="w-80 p-8  text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125"
                        style={{ background: `#1c1c1c` }}
                        data-aos="fade-up"
                        data-aos-duration="1200"
                      >
                       <h1 class="text-white font-semibold text-2xl">Standard</h1>
                        <p class="pt-2 tracking-wide">
                          <span class="text-white align-top">$ </span>
                          <span class="text-3xl font-semibold">25</span>
                          <span class="text-white font-medium">/ month</span>
                        </p>
                        <hr class="mt-4 border-1 border-gray-600" />
                        <div class="pt-8">
                          <p class="font-semibold text-gray-400 text-left">
                            <span class="material-icons align-middle">
                            ✅
                            </span>
                            <span class="pl-2 text-white">
                              All features in
                            </span>
                          </p>
                          <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                            ✅
                            </span>
                            <span class="pl-2 text-white" >
                              Flexible{" "}
                              <span class="text-white">call scheduling</span>
                            </span>
                          </p>
                          <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                            ✅
                            </span>
                            <span class="pl-2 text-white">
                              <span class="text-white">15 TB</span> cloud
                              storage
                            </span>
                          </p>

                          <a href="#" class="">
                            <p class="w-full py-4  mt-8 border rounded-xl text-white" style={{background:`#8247ff`}}>
                              <span class="font-medium">Get Started</span>
                              
                            </p>
                          </a>
                        </div>
                        <div class="absolute top-4 right-4">
                          <p class="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                            Popular
                          </p>
                        </div>
                      </div>

                      <div
                        class="w-96 p-8  bg-gray-100 text-center rounded-3xl pl-16 shadow-xl"
                        data-aos="fade-up"
                        data-aos-duration="1400"
                      >
                        <h1 class="text-black font-semibold text-2xl">
                          Business
                        </h1>
                        <p class="pt-2 tracking-wide">
                          <span class="text-black align-top">$ </span>
                          <span class="text-3xl font-semibold">35</span>
                          <span class="text-black font-medium">/ user</span>
                        </p>
                        <hr class="mt-4 border-1" />
                        <div class="pt-8 ">
                          <p class="font-semibold text-gray-400 text-left">
                            <span class="material-icons align-middle">
                            ✅
                            </span>
                            <span class="pl-2 text-black">
                              All features in{" "}
                              <span class="text-black">Startup</span>
                            </span>
                          </p>
                          <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                            ✅
                            </span>
                            <span class="pl-2 text-black">
                              Growth <span class="text-black">oriented</span>
                            </span>
                          </p>
                          <p class="font-semibold text-gray-400 text-left pt-5">
                            <span class="material-icons align-middle">
                            ✅
                            </span>
                            <span class="pl-2 text-black">
                              <span class="text-black">Unlimited</span> cloud
                              storage
                            </span>
                          </p>

                          <a href="#" class="">
                            <p class="w-full py-4 border bg-white mt-8 rounded-xl text-white">
                              <span class="font-medium text-black">Get Started</span>
                             
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* testimonial container */}
          <div className="testimonial-container">
            <div className="testimonial-section">
              {/* toast */}
              <div className="toast-dark ">
                <div
                  class="max-w-xs bg-white border border-gray-300 rounded-lg"
                  style={{ width: `160px`, color: `#8247ff` }}
                >
                  <div class="flex p-1">
                    <div class="flex-shrink-0">
                      <span style={{ paddingLeft: `4px` }}>🧡</span>
                    </div>
                    <div class="ms-3">
                      <p
                        class="text-l"
                        style={{ fontWeight: `500`, fontSize: `15px` }}
                      >
                        TESTIMONIALS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* heading  */}
              <div
                className="heading"
                style={{ justifyContent: `left`, marginTop: `30px` }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p
                  style={{
                    color: `black`,
                    fontSize: `58px`,
                    lineHeight: `1em`,
                  }}
                >
                  Hear from our{" "}
                  <span style={{ color: `#fe8162` }}>Satisfied</span> client
                </p>
              </div>
              {/* gray-heading */}
              <div className="gray-heading" style={{ justifyContent: `left` }}>
                <p
                  style={{
                    marginTop: `-10px`,
                    fontSize: `20px`,
                    textAlign: `left`,
                  }}
                >
                  Discover why our clients love working with us. Read their{" "}
                  <br />
                  testimonials and learn how we has helped businesses.
                </p>
              </div>
              {/* tetimonials final */}
              <div class=" test-container mb-8 text-center"></div>
              <div
                class="lg:grid lg:grid-cols-4 lg:gap-x-5"
                style={{ background: `white` }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div class="p-4 text-gray-800 rounded-lg shadow-md">
                  <div class="mb-2">
                    <p
                      class="mb-2 text-center text-black "
                      style={{ fontSize: `20px` }}
                    >
                      "The customer support team behind this product is
                      exceptional. They have been incredibly responsive and
                      helpful, addressing any questions or concerns promptly.
                    </p>
                    <div class="flex flex-col items-center justify-center">
                      <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                        <img
                          src="https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg"
                          alt="img"
                          class="object-cover object-center w-full h-full"
                        />
                      </div>
                      <h5 class="font-bold text-indigo-600">John Doe</h5>
                      <p class="text-sm text-gray-600">CEO / Founder</p>
                    </div>
                  </div>
                </div>
                <div class="p-4 text-gray-800 rounded-lg shadow-md">
                  <div class="mb-2">
                    <p
                      class="mb-2 test-centre text-black "
                      style={{ fontSize: `20px` }}
                    >
                      "Using this product has been a game-changer for our team.
                      The collaboration features and intuitive interface have
                      greatly improved our productivity.
                    </p>
                    <div class="flex flex-col items-center justify-center">
                      <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                        <img
                          src="https://framerusercontent.com/images/mIAsKrgLvd7WbLFFsh6f6YobhSc.jpg"
                          alt="img"
                          class="object-cover object-center w-full h-full"
                        />
                      </div>
                      <h5 class="font-bold text-indigo-600">michael james</h5>
                      <p class="text-sm text-gray-600">web developer</p>
                    </div>
                  </div>
                </div>
                <div class="p-4 text-gray-800 rounded-lg shadow-md">
                  <div class="mb-2">
                    <p
                      class="mb-2 text-center text-black "
                      style={{ fontSize: `20px` }}
                    >
                      "I can't imagine running my business without this product.
                      The automation features have saved me hours of manual
                      work, allowing me to focus on strategic tasks.
                    </p>
                    <div class="flex flex-col items-center justify-center">
                      <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                        <img
                          src="https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg"
                          alt="img"
                          class="object-cover object-center w-full h-full"
                        />
                      </div>
                      <h5 class="font-bold text-indigo-600">michael james</h5>
                      <p class="text-sm text-gray-600">web developer</p>
                    </div>
                  </div>
                </div>
                <div class="p-4 text-gray-800 rounded-lg shadow-md">
                  <div class="mb-2">
                    <p
                      class="mb-2 text-center text-black "
                      style={{ fontSize: `20px` }}
                    >
                      "Manage Wise transformed our team's productivity. The
                      intuitive interface and powerful features have made a
                      significant impact on our daily operations"
                    </p>
                    <div class="flex flex-col items-center justify-center">
                      <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                        <img
                          src="https://framerusercontent.com/images/dgHsIQVrsxRxtadpghDWppPujE.jpg"
                          alt="img"
                          class="object-cover object-center w-full h-full"
                        />
                      </div>
                      <h5 class="font-bold text-indigo-600">michael james</h5>
                      <p class="text-sm text-gray-600">web developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* popup container */}
          <div className="pop-container">
            <div className="pop-section"  data-aos="fade-up"
                data-aos-duration="1000">
              <div className="pop-left" style={{ paddingLeft: `150px`}}>
                <div className="toast-dark ">
                  <div
                    class="max-w-xs bg-white border border-gray-300 rounded-lg"
                    style={{ width: `160px`, color: `#8247ff` }}
                  >
                    <div class="flex p-1">
                      <div class="flex-shrink-0">
                        <span style={{ paddingLeft: `4px` }}>🧡</span>
                      </div>
                      <div class="ms-3">
                        <p
                          class="text-l"
                          style={{ fontWeight: `500`, fontSize: `15px` }}
                        >
                          TESTIMONIALS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="heading"
                  style={{ justifyContent: `left`, marginTop: `30px` }}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <p
                    style={{
                      color: `black`,
                      fontSize: `58px`,
                      lineHeight: `1em`,
                    }}
                  >
                    Unleash your <br />
                    <span style={{ color: `#fe8162` }}>Potential with us</span>
                  </p>
                </div>
                <div
                  className="gray-heading"
                  style={{ justifyContent: `left` }}
                >
                  <p
                    style={{
                      marginTop: `-10px`,
                      fontSize: `20px`,
                      textAlign: `left`,
                    }}
                  >
                    Join our community of ambitious <br />
                    individuals and organizations eager to <br />
                    make a difference.
                  </p>
                </div>
                <button
                  className="border-secondary inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-secondary "
                  style={{
                    backgroundColor: `#8247FF`,
                    color: `white`,
                    borderRadius: `18px`,
                    height: `56px`,
                    width: `211px`,
                    fontSize: `20px`,
                    marginTop: `10px`,
                  }}
                >
                  Try Out Now
                </button>
              </div>
            </div>
          </div>
          {/* footer container */}
          <div className="footer-container">
            <div className="footer-section">
              <footer class=" rounded-lg shadowd py-20" >
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                  <div class="sm:flex sm:items-center sm:justify-between">
                     <img
                        src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"
                        class="h-8"
                        alt="Flowbite Logo"
                      />
                    
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
                      <li>
                        <a href="#" class="hover:underline me-4 md:me-6 text-black">
                          Features
                        </a>
                      </li>
                      <li>
                        <a href="#" class="hover:underline me-4 md:me-6 text-black">
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a href="#" class="hover:underline me-4 md:me-6 text-black">
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a href="#" class="hover:underline text-black">
                          Testimonials
                        </a>
                      </li>
                    </ul>
                  </div>
                  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                  <span class="block text-sm  sm:text-center  text-black">
                    © 2022{" "}
                    <a href="https://flowbite.com/" class="hover:underline" >
                      ManageWise
                    </a>
                    . Inc.
                  </span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
