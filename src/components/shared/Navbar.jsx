import { Link, useLocation } from "react-router";
import Container from "./Container";
import Logo from "../../assets/images/Logo.png";
import { useEffect, useState } from "react";

function Navbar({ bg = "bg-white" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const [navBg, setNavBg] = useState(bg);

  const location = useLocation().pathname;
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about-us",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  useEffect(() => {
    navLinks.map((navLink, idx) => {
      if (location === navLink.path) {
        setActiveIndex(idx);
      }
    });

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavBg("bg-white transition-colors duration-300");
      } else {
        setNavBg(`${bg} transition-colors duration-300`);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location, bg, navLinks]);

  console.log(activeIndex);

  return (
    <div className=" ">
      <div className="">
        <Container>
          <div className={`${navBg} fixed z-[99]  left-0 right-0`}>
            <div className="max-w-[1520px] flex mx-auto py-6 items-center justify-between">
              <div className="w-40">
                <Link to={"/"}>
                  <img className="w-full " src={Logo} alt="" />
                </Link>
              </div>
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-7 ">
                  {navLinks.map((link, index) => (
                    <Link to={link?.path} key={link?.path}>
                      <h4
                        className={`text-md py-1.5 font-poppins ${
                          index === activeIndex
                            ? "text-primary relative after:absolute after:bottom-0 after:left-0 after:w-[80%] after:h-[2px] after:rounded-full after:bg-primary"
                            : "relative hover:text-primary hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-[80%] hover:after:h-[2px] hover:after:rounded-full hover:after:bg-primary after:transition-all after:duration-300 transition-all duration-300"
                        }`}
                      >
                        {link?.name}
                      </h4>
                    </Link>
                  ))}
                </div>
                <Link to={"/register"}>
                  <button className="px-8 font-medium text-white bg-primary py-2.5 rounded-md bg-">
                    Sign up now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
