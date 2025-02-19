import { Link } from "react-router";
import blogImg from "../../assets/images/blog-banner.png";

const Blog = () => {
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
      <div className=""></div>
      <figure className="w-full h-[740px] overflow-hidden relative">
        <img
          src="https://i.ibb.co.com/5W98PBrg/blog-hero.png"
          className="w-full h-full object-cover object-center"
          alt=""
        />
        <div
          className="overlay absolute top-0 left-0 h-full w-full"
          style={{
            backgroundImage: "url('https://i.ibb.co/kkXsdyt/blog-overlay.png')",
            "backgroundSize": "cover",
            "backgroundPosition": "center",
            "backgroundRepeat": "no-repeat",
          }}
        ></div>
        <h1 className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white text-[96px] font-bold leading-[96px] uppercase">
          Blog post
        </h1>
      </figure>
      <section
        className="py-32"
        style={{
          background:
            "url('https://i.ibb.co.com/jkkTmVwZ/blogbg-1.png') no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1520px]  mx-auto ">
          <h2 className="text-center text-5xl font-semibold text-black001 mb-4">
            Blog Posts
          </h2>
          <p className="text-center text-primaryDescription">
            Read our best practice tutorial and more
          </p>
          <div className="grid grid-cols-3 gap-x-5 gap-y-10 mt-10">
            {Array(9)
              .fill(null)
              .map((_, idx) => (
                <div
                  className="card bg-white rounded-lg overflow-hidden"
                  key={idx}
                >
                  <figure className="w-full h-[200px] rounded-t-lg overflow-hidden relative">
                    <img
                      src={blogImg}
                      className="h-full w-full object-cover object-center"
                      alt=""
                    />
                    <p className="text-white bg-primary absolute top-4 left-0 px-3 py-2 rounded-tr-xl ">20 AUG ,2024</p>
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
                      className="group text-primary font-medium inline-flex gap-1 justify-center p-3 border border-primary group hover:bg-primary hover:text-white transition-all duration-300 rounded-full w-full"
                    >
                      Read More{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-6 fill-primary group-hover:fill-white transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-1"
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
        </div>
      </section>
    </>
  );
};

export default Blog;
