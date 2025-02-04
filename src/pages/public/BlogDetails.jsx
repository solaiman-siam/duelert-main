import { Link } from "react-router";

const BlogDetails = () => {
  const blog = {
    title: "International Conference On Art Business",
    date: "20 AUG ,2024",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    time: "09:42 PM",
    author: "Author",
    category: "Category",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ante vel egestas ultrices...",
    image: "https://i.ibb.co/kkXsdyt/blog-overlay.png",
    dateLabel: "20 AUG, 2024",
  };

  return (
    <>
      <div className="pt-28"></div>
      <figure className="w-full h-[740px] overflow-hidden relative">
        <img
          src="https://i.ibb.co.com/CpPSK8Kn/Blog-Details-Banner.png"
          className="w-full h-full object-cover object-center"
          alt=""
        />
        <div
          className="overlay absolute top-0 left-0 h-full w-full opacity-0"
          style={{
            backgroundImage: "url('https://i.ibb.co/kkXsdyt/blog-overlay.png')",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
          }}
        ></div>
        <h1 className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white text-[96px] font-bold leading-[96px] uppercase">
          Blog Details
        </h1>
      </figure>
      <section
        className="pt-16 pb-24"
        style={{
          background:
            "url('https://i.ibb.co.com/jkkTmVwZ/blogbg-1.png') no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1720px]  mx-auto ">
          <div className="breadcrumb text-black001 flex flex-row gap-4 mb-9">
            <p className="text-2xl">Author</p>
            <div className="w-px bg-[#00000080]"></div>
            <p className="text-2xl">Category</p>
            <div className="w-px bg-[#00000080]"></div>
            <p className="text-2xl">1 min ago</p>
          </div>
          <h3 className="text-5xl mb-9 font-medium">{blog.title}</h3>
          <div className="flex items-center gap-12 mb-12">
            <p className="text-primaryDescription text-2xl">
              Data:{" "}
              <span className="text-[#050505] font-medium">12/12/2024</span>
            </p>
            <p className="text-primaryDescription text-2xl">
              Time:{" "}
              <span className="text-[#050505] font-medium">{blog.time}</span>
            </p>
          </div>
          <div className="text-2xl w-[80%] space-y-12 mb-[138px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
              egestas ultrices. Vestibulum et neque id ex semper varius a sit
              amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
              iaculis finibus egestas. Nam viverra urna quis odio efficitur
              malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
              Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Curabitur sed commodo leo.
              Suspendisse potenti. Maecenas gravida ipsum placerat ligula
              posuere, ut rhoncus velit eleifend.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
              egestas ultrices. Vestibulum et neque id ex semper varius a sit
              amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
              iaculis finibus egestas. Nam viverra urna quis odio efficitur
              malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
              Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Curabitur sed commodo leo.
              Suspendisse potenti. Maecenas gravida ipsum placerat ligula
              posuere, ut rhoncus velit eleifend.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
              egestas ultrices. Vestibulum et neque id ex semper varius a sit
              amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
              iaculis finibus egestas. Nam viverra urna quis odio efficitur
              malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
              Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Curabitur sed commodo leo.
              Suspendisse potenti. Maecenas gravida ipsum placerat ligula
              posuere, ut rhoncus velit eleifend.
            </p>
          </div>

          <div className="">
            <p className="text-[32px] font-semibold">More posts</p>
            <div className="grid grid-cols-3 gap-x-5 gap-y-10 my-10">
              {Array(3)
                .fill(null)
                .map((_, idx) => (
                  <div
                    className="card bg-white rounded-lg overflow-hidden"
                    key={idx}
                  >
                    <figure className="w-full h-[200px] rounded-t-lg overflow-hidden">
                      <img
                        src="https://i.ibb.co.com/pBwYMpJt/BLOG.png"
                        className="h-full w-full object-cover object-center"
                        alt=""
                      />
                    </figure>
                    <div className="p-6">
                      <div className="w-[70%]">
                        <h4 className="text-2xl font-medium mb-4">
                          {blog.title}
                        </h4>
                        <p className="text-lg mb-6">{blog.shortDescription}</p>
                      </div>
                      <Link
                        to={"/blog-details"}
                        className="text-primary font-medium inline-flex gap-2 justify-center p-3 border border-primary group hover:bg-primary hover:text-white transition-all duration-300 rounded-full w-full"
                      >
                        Read More{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-6 fill-primary group-hover:fill-white transition-all duration-300"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path d="M16.0037 13.4142L7.39712 22.0208L5.98291 20.6066L14.5895 12H7.00373V10H18.0037V21H16.0037V13.4142Z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
            <div className="text-center">
              <button
                type="button"
                className="text-white font-medium text-lg px-14 py-4 bg-primary rounded-lg"
              >
                View more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
