import profileImg from "../../assets/images/profile.png";
import Qna from "../../components/price-sections/Qna";
function Support() {
  const handleForm = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-medium">Get in touch with us</h2>
      <div className="grid grid-cols-3 gap-10">
        <div className="">
          <div className="mt-8 flex items-center gap-6 mb-4">
            <figure className="size-[75px] rounded-full overflow-hidden flex-shrink-0">
              <img src={profileImg} alt="" />
            </figure>
            <p className="border rounded-lg p-2.5 text-[#353B48]">
              Hi, I’m Amanda. Need help? Use the form below or email me at
              hello@california-golfclub.org.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleForm}>
            <fieldset className="flex flex-col">
              <label htmlFor="name" className="text-[#343333] text-lg mb-3">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Rachel Joe"
                className="border px-5 py-4 rounded-md outline-primary"
              />
            </fieldset>

            <fieldset className="flex flex-col">
              <label htmlFor="email" className="text-[#343333] text-lg mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Rachel@domain.com"
                className="border px-5 py-4 rounded-md outline-primary"
              />
            </fieldset>

            <fieldset className="flex flex-col">
              <label htmlFor="message" className="text-[#343333] text-lg mb-3">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                placeholder="Write here"
                className="h-[120px] border px-5 py-4 rounded-md outline-primary"
              />
            </fieldset>
            <button
              type="submit"
              className="text-white font-semibold px-12 py-4 bg-primary rounded-lg"
            >
              Send my message
            </button>
          </form>
        </div>
        <div className="col-span-2">
          <Qna />
        </div>
      </div>
    </div>
  );
}

export default Support;
