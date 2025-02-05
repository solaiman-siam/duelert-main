import Container from "./Container";
import Logo from "../../assets/images/logo-white.png";
import { Link } from "react-router";
import { LiaFacebookF } from "react-icons/lia";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
function Footer() {
  return (
    <div className="bg-[#353B48] pt-20 pb-14 text-white">
      <Container>
        <div className="flex items-right gap-24 justify-between ">
          <div className="flex-1 flex-col flex justify-center">
            <img className="w-52" src={Logo} alt="" />
            <p className="font-light pt-4 pb-10">
              Without your customers, there will no need for you to run your
              business. With Duelert, you will never have to miss thier
              important days anymore. Show your customers, you care...
            </p>

            <div className="flex flex-col gap-4">
              <label className="font-light" htmlFor="">
                Be the first to get updates
              </label>
              <div className="flex w-fit rounded-lg overflow-hidden items-center ">
                <input className="px-4  text-description focus:outline-none h-full " type="text" name="" id="" />
                <button className=" bg-primary px-8 py-3">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-start flex-col gap-3">
            <div className="flex flex-col text-white gap-2">
              <h3 className="pb-3">Pages</h3>
              <Link>
                <h4 className="text-white  hover:text-primary transition-all font-light duration-300 ">
                  Home
                </h4>
              </Link>
              <Link>
                <h4 className="text-white  hover:text-primary transition-all font-light duration-300 ">
                  About
                </h4>
              </Link>
              <Link>
                <h4 className="text-white  hover:text-primary transition-all font-light duration-300 ">
                  Pricing
                </h4>
              </Link>
              <Link>
                <h4 className="text-white  hover:text-primary transition-all font-light duration-300 ">
                  Blog
                </h4>
              </Link>
              <Link>
                <h4 className="text-white  hover:text-primary transition-all font-light duration-300 ">
                  Contact Us
                </h4>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex-col gap-4 flex items-end justify-start ">
            <div className="flex w-fit flex-col gap-3">
              <h3 className="pb-3">Social Media</h3>
              <div className="flex items-center gap-3">
                <Link className="border rounded-full hover:bg-primary transition-all hover:border-primary duration-300 p-2">
                  <LiaFacebookF size={22} />
                </Link>
                <Link className="border rounded-full hover:bg-primary transition-all hover:border-primary duration-300 p-2">
                  <PiInstagramLogoFill size={22} />
                </Link>
                <Link className="border rounded-full hover:bg-primary transition-all hover:border-primary duration-300 p-2">
                  <RiTwitterXLine size={22} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 border-gray-400 ">
          <h4 className="text-center py-4 text-sm text-gray-400 ">
            COPYRIGHT © 2024 — Duelert
          </h4>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
