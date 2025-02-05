import CommonHead from "../shared/CommonHead";

import VectorLeft from '../../assets/images/vector-left.png'
import VectorRight from '../../assets/images/vector-right.png'
import Calender from '../../assets/images/calender.png'

function CalenderBanner() {
  return (
    <div className="space-y-8 py-24">
      <div className="flex justify-center">
      <CommonHead className={'w-5/12 text-enter'} head={'Never Forget Again: Your Personal Reminder Companion'}/>
      </div>

      <div className="flex items-center gap-8 pt-8 justify-between">
        <div>
            <img src={VectorLeft} alt="" />
        </div>
        <div>
            <img src={Calender} alt="" />
        </div>
        <div>
            <img src={VectorRight} alt="" />
        </div>
      </div>

     <div className="flex justify-center items-center">
     <p className="text-description/80 w-8/12 text-center">Introducing our revolutionary reminder website, your ultimate tool for staying organized and on top of your commitments. With intuitive features and customizable alerts, never miss an important date or task again. From appointments to deadlines, streamline your life effortlessly with our user-friendly platform. Try it now and experience efficiency redefined.</p>
     </div>
    </div>
  );
}

export default CalenderBanner;
