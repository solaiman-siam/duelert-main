
import ReactStars from "react-rating-stars-component";
import Container from "../../components/shared/Container";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Contact = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Marshall",
      title: "Customer Relationship Manager, XYZ Tech",
      quote:
        '" Using Duelert has increased customer patronage by a whooping 75%, our customers love these. "',
      rating: 5,
      date: "28 Nov",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dP1U4xqAjUdZyRVejKkHBGfAaA1YlS.png",
    },
    {
      id: 2,
      name: "John Marshall",
      title: "Customer Relationship Manager, XYZ Tech",
      quote:
        '" Using Duelert has increased customer patronage by a whooping 75%, our customers love these. "',
      rating: 5,
      date: "28 Nov",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dP1U4xqAjUdZyRVejKkHBGfAaA1YlS.png",
    },
    {
      id: 3,
      name: "John Marshall",
      title: "Customer Relationship Manager, XYZ Tech",
      quote:
        '" Using Duelert has increased customer patronage by a whooping 75%, our customers love these. "',
      rating: 5,
      date: "28 Nov",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dP1U4xqAjUdZyRVejKkHBGfAaA1YlS.png",
    },
    {
      id: 4,
      name: "John Marshall",
      title: "Customer Relationship Manager, XYZ Tech",
      quote:
        '" Using Duelert has increased customer patronage by a whooping 75%, our customers love these. "',
      rating: 5,
      date: "28 Nov",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dP1U4xqAjUdZyRVejKkHBGfAaA1YlS.png",
    },
    {
      id: 1,
      name: "John Marshall",
      title: "Customer Relationship Manager, XYZ Tech",
      quote:
        '" Using Duelert has increased customer patronage by a whooping 75%, our customers love these. "',
      rating: 5,
      date: "28 Nov",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dP1U4xqAjUdZyRVejKkHBGfAaA1YlS.png",
    },
    {
      id: 2,
      name: "John Marshall",
      title: "Customer Relationship Manager, XYZ Tech",
      quote:
        '" Using Duelert has increased customer patronage by a whooping 75%, our customers love these. "',
      rating: 5,
      date: "28 Nov",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dP1U4xqAjUdZyRVejKkHBGfAaA1YlS.png",
    },
    {
      id: 3,
      name: "John Marshall",
      title: "Customer Relationship Manager, XYZ Tech",
      quote:
        '" Using Duelert has increased customer patronage by a whooping 75%, our customers love these. "',
      rating: 5,
      date: "28 Nov",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dP1U4xqAjUdZyRVejKkHBGfAaA1YlS.png",
    },
    {
      id: 4,
      name: "John Marshall",
      title: "Customer Relationship Manager, XYZ Tech",
      quote:
        '" Using Duelert has increased customer patronage by a whooping 75%, our customers love these. "',
      rating: 5,
      date: "28 Nov",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dP1U4xqAjUdZyRVejKkHBGfAaA1YlS.png",
    },
  ];

  return (
    <>
      <div className="pt-28"></div>
      <figure className="w-full h-[740px] overflow-hidden relative">
        <img
          src="https://i.ibb.co.com/V0jjZFHM/Contact-Banner.png"
          className="w-full h-full object-cover object-center"
          alt=""
        />
        <div
          className="overlay absolute top-0 left-0 h-full w-full"
          style={{
            backgroundImage: "url('https://i.ibb.co/kkXsdyt/blog-overlay.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <h1 className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white text-[96px] font-bold leading-[96px] uppercase">
          Contact us
        </h1>
      </figure>

      <section
        className="py-32"
        style={{
          background:
            "url('https://i.ibb.co.com/b5ZVydM4/image-19.png') no-repeat",
          backgroundSize: "cover",
        }}
      >
        <>
          <div className="pb-32 max-w-[1720px] mx-auto flex gap-28">
            <div className="left flex-1">
              <h2 className="text-5xl font-semibold text-black001 mb-4">
                Say Hi!
              </h2>
              <p className="text-2xl text-description mb-10">
                We’d like to talk with you.
              </p>
              <form onSubmit={handleSubmit} className="">
                <fieldset className="space-y-2 mb-7">
                  <label
                    htmlFor="fullName"
                    className="text-black001 font-semibold text-xl"
                  >
                    My name is
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full p-4 rounded-lg bg-white focus:outline-primary focus-visible:outline-primary"
                  />
                </fieldset>
                <fieldset className="space-y-2 mb-7">
                  <label
                    htmlFor="yourLove"
                    className="text-black001 font-semibold text-xl"
                  >
                    I’m looking for
                  </label>
                  <input
                    id="yourLove"
                    type="text"
                    name="yourLove"
                    placeholder="What you love"
                    className="w-full p-4 rounded-lg bg-white focus:outline-primary focus-visible:outline-primary"
                  />
                </fieldset>

                <fieldset className="space-y-2 mb-10">
                  <label
                    htmlFor="message"
                    className="text-black001 font-semibold text-xl"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    type="text"
                    name="message"
                    placeholder="I want to say that..."
                    className="w-full p-4 rounded-lg bg-white h-[180px] focus:outline-primary focus-visible:outline-primary"
                  />
                </fieldset>

                <button
                  type="submit"
                  className="text-white py-4 px-10 bg-primary font-bold rounded-lg w-fit"
                  style={{
                    boxShadow:
                      "0px 4.8px 8.4px -1.2px rgba(0, 0, 0, 0.11), 0px 2.4px 4.8px -1.2px rgba(0, 0, 0, 0.07)",
                  }}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            <div className="right flex-1 relative">
              <figure className="h-[695px] w-full rounded-lg overflow-hidden">
                <img
                  src="https://i.ibb.co.com/4RJHKH8C/smiling.png"
                  className="h-full w-full object-cover object-center"
                  alt=""
                />
              </figure>
              <div className=" absolute top-[80px] left-1/2 -translate-x-1/2 text-white w-[520px]">
                <h3 className="text-5xl font-semibold mb-3">
                  Contact Information
                </h3>
                <p className="text-2xl mb-14">
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>
                <div className="flex flex-col gap-6">
                  <p className=" inline-flex gap-3 items-center text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M19.95 21.5649C17.8667 21.5649 15.8083 21.1108 13.775 20.2024C11.7417 19.2941 9.89167 18.0066 8.225 16.3399C6.55833 14.6733 5.27083 12.8233 4.3625 10.7899C3.45417 8.75661 3 6.69827 3 4.61494C3 4.31494 3.1 4.06494 3.3 3.86494C3.5 3.66494 3.75 3.56494 4.05 3.56494H8.1C8.33333 3.56494 8.54167 3.64411 8.725 3.80244C8.90833 3.96077 9.01667 4.14827 9.05 4.36494L9.7 7.86494C9.73333 8.13161 9.725 8.35661 9.675 8.53994C9.625 8.72327 9.53333 8.88161 9.4 9.01494L6.975 11.4649C7.30833 12.0816 7.70417 12.6774 8.1625 13.2524C8.62083 13.8274 9.125 14.3816 9.675 14.9149C10.1917 15.4316 10.7333 15.9108 11.3 16.3524C11.8667 16.7941 12.4667 17.1983 13.1 17.5649L15.45 15.2149C15.6 15.0649 15.7958 14.9524 16.0375 14.8774C16.2792 14.8024 16.5167 14.7816 16.75 14.8149L20.2 15.5149C20.4333 15.5816 20.625 15.7024 20.775 15.8774C20.925 16.0524 21 16.2483 21 16.4649V20.5149C21 20.8149 20.9 21.0649 20.7 21.2649C20.5 21.4649 20.25 21.5649 19.95 21.5649ZM6.025 9.56494L7.675 7.91494L7.25 5.56494H5.025C5.10833 6.24827 5.225 6.92327 5.375 7.58994C5.525 8.25661 5.74167 8.91494 6.025 9.56494ZM14.975 18.5149C15.625 18.7983 16.2875 19.0233 16.9625 19.1899C17.6375 19.3566 18.3167 19.4649 19 19.5149V17.3149L16.65 16.8399L14.975 18.5149Z"
                        fill="white"
                      />
                    </svg>
                    (+40) 772 100 200
                  </p>
                  <p className=" inline-flex gap-3 items-center text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M4 20.8948C3.45 20.8948 2.97917 20.6989 2.5875 20.3073C2.19583 19.9156 2 19.4448 2 18.8948V6.89478C2 6.34478 2.19583 5.87394 2.5875 5.48228C2.97917 5.09061 3.45 4.89478 4 4.89478H20C20.55 4.89478 21.0208 5.09061 21.4125 5.48228C21.8042 5.87394 22 6.34478 22 6.89478V18.8948C22 19.4448 21.8042 19.9156 21.4125 20.3073C21.0208 20.6989 20.55 20.8948 20 20.8948H4ZM12 13.8948L4 8.89478V18.8948H20V8.89478L12 13.8948ZM12 11.8948L20 6.89478H4L12 11.8948ZM4 8.89478V6.89478V18.8948V8.89478Z"
                        fill="white"
                      />
                    </svg>
                    hello@creative-tim.com
                  </p>
                  <p className=" inline-flex gap-3 items-center text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="21"
                      viewBox="0 0 16 21"
                      fill="none"
                    >
                      <path
                        d="M8 10.2246C8.55 10.2246 9.02083 10.0288 9.4125 9.63711C9.80417 9.24544 10 8.77461 10 8.22461C10 7.67461 9.80417 7.20378 9.4125 6.81211C9.02083 6.42044 8.55 6.22461 8 6.22461C7.45 6.22461 6.97917 6.42044 6.5875 6.81211C6.19583 7.20378 6 7.67461 6 8.22461C6 8.77461 6.19583 9.24544 6.5875 9.63711C6.97917 10.0288 7.45 10.2246 8 10.2246ZM8 17.5746C10.0333 15.7079 11.5417 14.0121 12.525 12.4871C13.5083 10.9621 14 9.60794 14 8.42461C14 6.60794 13.4208 5.12044 12.2625 3.96211C11.1042 2.80378 9.68333 2.22461 8 2.22461C6.31667 2.22461 4.89583 2.80378 3.7375 3.96211C2.57917 5.12044 2 6.60794 2 8.42461C2 9.60794 2.49167 10.9621 3.475 12.4871C4.45833 14.0121 5.96667 15.7079 8 17.5746ZM8 20.2246C5.31667 17.9413 3.3125 15.8204 1.9875 13.8621C0.6625 11.9038 0 10.0913 0 8.42461C0 5.92461 0.804167 3.93294 2.4125 2.44961C4.02083 0.966276 5.88333 0.224609 8 0.224609C10.1167 0.224609 11.9792 0.966276 13.5875 2.44961C15.1958 3.93294 16 5.92461 16 8.42461C16 10.0913 15.3375 11.9038 14.0125 13.8621C12.6875 15.8204 10.6833 17.9413 8 20.2246Z"
                        fill="white"
                      />
                    </svg>
                    Dyonisie Wolf Bucharest, RO 010458
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>

        <>
          <div className="max-w-[1720px]  mx-auto">
            <h2 className="text-center text-5xl font-semibold text-black001 mb-4">
              Testimonials
            </h2>
          </div>
          <div className="mt-10 overflow-hidden">
            <Container>
              <Swiper
                slidesPerView={"auto"}
                centeredSlides={false}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                  renderBullet: function (index, className) {
                    return `<span class="${className} custom-bullet"></span>`;
                  },
                }}
                modules={[Pagination]}
                className="testimonialSwiper !overflow-visible"
              >
                {Array(12)
                  .fill(null)
                  .map((_, idx) => (
                    <SwiperSlide key={idx}>
                      <div
                        className="card bg-white p-[40px] rounded-lg w-[500px] mb-20 flex-shrink-0"
                        style={{
                          "box-shadow": "0px 8px 23px 0px rgba(0, 0, 0, 0.10)",
                        }}
                      >
                        <div className="flex gap-4 mb-4">
                          <div className="relative w-fit h-fit flex-shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-16"
                              viewBox="0 0 63 65"
                              fill="none"
                            >
                              <path
                                d="M54.822 55.5569C49.8789 60.3648 43.5199 63.4544 36.6852 64.369C29.8505 65.2835 22.9028 63.9744 16.8696 60.6353C10.8364 57.2961 6.03775 52.1042 3.1833 45.8271C0.328853 39.55 -0.429919 32.5209 1.01918 25.7793C2.46828 19.0376 6.04831 12.9412 11.23 8.39141C16.4116 3.84164 22.9198 1.08003 29.7923 0.514913C36.6647 -0.0502017 43.5366 1.61117 49.3919 5.25339C55.2471 8.89561 59.775 14.3253 62.3059 20.7397L58.2377 22.3449C56.0513 16.8038 52.14 12.1133 47.0819 8.96697C42.0238 5.82062 36.0875 4.38544 30.1507 4.87362C24.2139 5.36179 18.5917 7.74742 14.1156 11.6778C9.63937 15.6081 6.54674 20.8745 5.29493 26.6983C4.04312 32.5221 4.69859 38.5942 7.16442 44.0167C9.63025 49.4392 13.7755 53.9243 18.9874 56.8088C24.1992 59.6934 30.2009 60.8242 36.1051 60.0342C42.0094 59.2441 47.5026 56.5752 51.7727 52.4219L54.822 55.5569Z"
                                fill="#CE122D"
                              />
                            </svg>

                            <figure className="size-[75%] rounded-full overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                              <img
                                src="https://i.ibb.co.com/j90pYBK2/profile.png"
                                alt=""
                                className="w-full h-full object-cover object-center"
                              />
                            </figure>
                          </div>

                          <div className="">
                            <h4 className="text-black001 text-2xl font-semibold mb-1.5">
                              John Marshall
                            </h4>
                            <p className="text-[#969696] w-[70%]">
                              Customer Relationship Manager, XYZ Tech.
                            </p>
                          </div>
                        </div>

                        <p className="text-primaryDescription text-xl w-[90%] mb-5">
                          “ Using Duelert has increased customer paronage by a
                          whooping 75%, our customers love these..”
                        </p>

                        <div className="flex gap-4 items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <p className="text-xl font-semibold">5.0</p>
                            <ReactStars
                              size={30}
                              edit={false}
                              value={5}
                              activeColor={"#FB9529"}
                            />
                          </div>
                          <button
                            type="button"
                            className="px-8 py-3 bg-[#fae1e5] rounded-full"
                          >
                            28 Nov
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </Container>
          </div>
        </>
      </section>
    </>
  );
};

export default Contact;
