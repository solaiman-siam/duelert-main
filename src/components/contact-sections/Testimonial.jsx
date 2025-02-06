import ReactStars from "react-rating-stars-component";
import Container from "../../components/shared/Container";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
function Testimonial() {
  return (
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
  )
}

export default Testimonial