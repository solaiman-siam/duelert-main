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
      path: "/about",
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
    <div className="">
      <Container>
        <div className="flex  fixed left-0 right-0 max-w-[1720px]  mx-auto py-8 items-center justify-between">
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
                      index === activeIndex ? "text-primary " : ""
                    }`}
                  >
                    {link?.name}
                  </h4>
                </Link>
              ))}
            </div>
            <div>
              <button className="px-8 font-medium text-white bg-primary py-2.5 rounded-md bg-">
                Sign up now
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
