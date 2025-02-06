import Container from "../shared/Container";
import sectionImage from '../../assets/images/section_image.png'
function OurMission() {
  return (
    <div className="py-24">
      <Container>
        <div className="flex items-center gap-10">
          <div className="flex-1  h-full flex justify-start items-center">
            <img
              className={" w-[700px] h-full object-contain"}
              src={sectionImage}
              alt="slide-image"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-4xl font-bold pb-4 ">Our Mission</h3>
            <p className="text-description w-11/12 ">
              Customers are important to companies and they should be treated
              with a little love and affection. Duelert is an application that
              reminds the customer of their birthday, anniversaries and other
              important events on the customer's calendar. Customers can also
              add their own events to the system so that they are reminded every
              day when they check in at work.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurMission;
