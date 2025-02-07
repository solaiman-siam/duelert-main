import { Link } from "react-router";
import Container from "./Container";
import Logo from "../../assets/images/Logo.png";
import { useState } from "react";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleActiveLink = (name, index) => {
    setActiveIndex(index);
  };

  return (
    <div className=" ">
      <div className="">
      <Container>
        <div className=" bg-white  fixed z-[99]  left-0 right-0   ">
         <div className="max-w-[1620px] flex mx-auto py-6 items-center justify-between">
         <div className="w-40">
            <Link to={"/"}>
              <img className="w-full " src={Logo} alt="" />
            </Link>
          </div>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2 ">
              {navLinks.map((link, index) => (
                <Link to={link?.path} key={link?.path}>
                  <h4
                    onClick={() => handleActiveLink(link, index)}
                    className={`text-md px-4 py-2 font-poppins ${
                      index === activeIndex ? "text-primary border-b border-primary bg-gradient-to-b from-transparent to-primary/5" : "border-b border-white bg-gradient-to-b hover:bg-gradient-to-b  hover:from-transparent hover:to-primary/5"
                    }`}
                  >
                    {link?.name}
                  </h4>
                </Link>
              ))}
            </div>
            <Link to={'/register'}>
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
