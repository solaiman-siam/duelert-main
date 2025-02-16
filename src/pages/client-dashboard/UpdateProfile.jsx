import banner from "../../assets/images/update-profile-banner.png";
import profilePic from "../../assets/images/profile.png";
import flag from "../../assets/images/bdFlag.jpg";
import PasswordField from "../../components/shared/PasswordField";

const UpdateProfile = () => {
  const validateForm = (data) => {
    const regexPatterns = {
      name: /^[a-zA-Z\s]{3,50}$/,
      userName: /^[a-zA-Z0-9_]{3,20}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    };

    let errors = {};

    if (!regexPatterns.name.test(data.name)) {
      errors.name = "Name must be 3-50 characters (letters and spaces only).";
    }
    if (!regexPatterns.userName.test(data.userName)) {
      errors.userName =
        "Username must be 3-20 characters (letters, numbers, underscores).";
    }
    if (!regexPatterns.email.test(data.email)) {
      errors.email = "Invalid email format.";
    }
    if (!regexPatterns.password.test(data.newPassword)) {
      errors.newPassword =
        "Password must be at least 8 characters with a letter, number, and special character.";
    }
    if (data.newPassword !== data.confirmNewPassword) {
      errors.confirmNewPassword = "Passwords do not match.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
  
    const errors = validateForm(data);
  
    if (Object.keys(errors).length > 0) {
      console.log("Validation Errors:", errors);
    } else {
      console.log("Form Data:", data);
    }
  };
  
  return (
    <>
      <figure className="banner h-[240px] w-full overflow-hidden">
        <img
          src={banner}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </figure>
      <div className="p-8">
        <div className="flex items-center gap-8 -mt-12">
          <figure className="size-[150px] rounded-full overflow-hidden border-4 border-white">
            <img
              src={profilePic}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </figure>
          <div className="">
            <h3 className="text-[#222F3E] text-3xl font-semibold mb-1">
              John White
            </h3>
            <div className="flex items-center gap-2.5">
              <figure className="size-8 rounded-full overflow-hidden">
                <img
                  src={flag}
                  alt=""
                  className="size-full object-cover object-center"
                />
              </figure>
              <p className="text-[#2C2C2C] text-lg">Bangladesh</p>
            </div>
          </div>
        </div>
        <form
          className="grid grid-cols-2 gap-y-7 gap-x-8 mt-8 w-[80%]"
          onSubmit={handleSubmit}
        >
          <fieldset className="">
            <input
              type="text"
              name="name"
              placeholder="Name here"
              className="w-full px-5 py-4 rounded-lg outline-primary"
            />
          </fieldset>
          <fieldset className="">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone number here"
              className="w-full px-5 py-4 rounded-lg outline-primary"
            />
          </fieldset>
          <fieldset className="">
            <input
              type="text"
              name="userName"
              placeholder="Your username"
              className="w-full px-5 py-4 rounded-lg outline-primary"
            />
          </fieldset>
          <fieldset className="">
            <input
              type="email"
              name="email"
              placeholder="Email here"
              className="w-full px-5 py-4 rounded-lg outline-primary"
            />
          </fieldset>
          <PasswordField
            name={"currentPassword"}
            placeholder={"Current password"}
          />
          <PasswordField name={"newPassword"} placeholder={"New password"} />
          <PasswordField
            name={"confirmNewPassword"}
            placeholder={"Confirm New Password"}
          />
          <div className=""></div>

          <div className="flex gap-5">
            <button
              type="button"
              className="w-full py-4 rounded-lg text-[#353B48] hover:text-white bg-transparent hover:bg-[#353B48] border border-[#353B48] font-semibold transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full py-4 rounded-lg text-white bg-primary border border-primary font-semibold"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
