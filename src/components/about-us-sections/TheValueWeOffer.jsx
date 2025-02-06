import Container from "../shared/Container";
import SlideImage from '../../assets/images/about-image.png'

function TheValueWeOffer() {
  return (
    <div>
      <Container>
        <div className="flex items-center gap-10">
          <div className="flex-1">
            <h3 className="text-4xl font-bold pb-4 ">The Value we offer</h3>
            <p className="text-description w-11/12 ">Duelert is a calendar tool that alerts businesses of customers' birthday, vehicle renewal alerts and important schedules. It's also a great tool for reminding people of birthdays, anniversaries, 
            appointments and more.</p>
          </div>
          <div className="flex-1 w-full h-full flex justify-center items-center">
            <img className={' w-full h-full object-contain'} src={SlideImage} alt="slide-image" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TheValueWeOffer;
