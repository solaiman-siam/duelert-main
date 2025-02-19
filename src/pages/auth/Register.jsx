import CommonInput from "../../components/shared/CommonInput";
import CommonLabel from "../../components/shared/CommonLabel";
import Image from "../../assets/images/login.png";
import Gradient from "../../assets/images/login-gradient.png";
import Google from "../../assets/images/google.png";
import Facebook from "../../assets/images/facebook.png";
import { Link } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function Register() {
  const [passShow, setPassShow] = useState(false);
  const [confirmPassShow, setConfirmPassShow] = useState(false);

  return (
    <div className="w-full container max-w-[1420px] mx-auto py-12  flex  items-center gap-24 ">
      <div className="relative  h-[750px] flex-1 rounded-lg overflow-hidden">
        <img
          className="w-full absolute h-full top-0 z-[4] left-0 object-cover"
          src={Gradient}
          alt=""
        />
        <img
          className="w-full absolute h-full top-0 z-[2]  left-0 object-cover"
          src={Image}
          alt=""
        />
      </div>
      <div className="w-full flex-1">
        <h3 className="text-5xl font-semibold pb-8">Create an account</h3>
        <div>
          <form action="" className="flex flex-col gap-4">
            <div className="w-full flex flex-col gap-2">
              <CommonLabel labelName={"Name"} htmlFor={"name"} />
              <CommonInput
                type={"text"}
                placeholder={"Enter your Name"}
                name={"name"}
                id={"name"}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <CommonLabel labelName={"Email"} htmlFor={"email"} />
              <CommonInput
                type={"email"}
                placeholder={"Enter your Email"}
                name={"email"}
                id={"email"}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <CommonLabel labelName={"Password"} htmlFor={"password"} />
              <div className="relative">
                <CommonInput
                  type={passShow ? "text" : "password"}
                  placeholder={"Enter your Password"}
                  name={"password"}
                  id={"password"}
                />
                <span
                  onClick={() => setPassShow(!passShow)}
                  className="absolute cursor-pointer top-1/2 right-5 -translate-y-1/2"
                >
                  {" "}
                  {passShow ? <Eye size={20} /> : <EyeOff size={20} />}{" "}
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <CommonLabel
                labelName={"Confirm Password"}
                htmlFor={"confirm_password"}
              />
              <div className="relative">
                <CommonInput
                  type={confirmPassShow ? "text" : "password"}
                  placeholder={"Enter Password Again"}
                  name={"confirm_password"}
                  id={"confirm_password"}
                />
                <span
                  onClick={() => setConfirmPassShow(!confirmPassShow)}
                  className="absolute cursor-pointer top-1/2 right-5 -translate-y-1/2"
                >
                  {confirmPassShow ? <Eye size={20} /> : <EyeOff size={20} />}{" "}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button className="w-full py-3 bg-primary rounded-md text-white font-medium">
                Register
              </button>
            </div>

            <div className="w-full flex items-center gap-4 px-4">
              <div className="flex-1 border"></div>
              <span>Or</span>
              <div className="flex-1 border"></div>
            </div>
          </form>
          <div className="flex items-center gap-10 pt-4">
            <div className="flex border cursor-pointer py-3.5 justify-center items-center rounded-md flex-1  gap-4">
              <img src={Google} alt="" />
              <h4 className="font-medium">Google</h4>
            </div>
            <div className="flex flex-1 cursor-pointer py-3.5 justify-center border rounded-md items-center gap-4">
              <img src={Facebook} alt="" />
              <h4 className="font-medium">Facebook</h4>
            </div>
          </div>
          <div className="flex items-center gap-1 justify-center pt-4">
            Already have an account?{" "}
            <Link to="/login">
              <h4 className="font-medium text-primary hover:underline">
                Log in
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
