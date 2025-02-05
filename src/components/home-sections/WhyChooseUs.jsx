import { chooseCardData } from "../../lib/staticData"
import CommonHead from "../shared/CommonHead"
import CommonSubHead from "../shared/CommonSubHead"
import Container from "../shared/Container"
import ChooseUsCard from "./ChooseUsCard"


function WhyChooseUs() {
  return (
    <div className="py-24">
        <Container>
            <div className="flex  justify-center items-center flex-col">
            <CommonSubHead subhead={'Why choose us?'}/>
            <CommonHead head={'The Value we offer'}/>
            <p className="text-center text-description pt-4 w-6/12">Duelert is a calendar tool that alerts businesses of customers' birthday, vehicle renewal alerts and important schedules. It's also a great tool for reminding people of birthdays, anniversaries, appointments and more.</p>
            </div>


            <div className="grid grid-cols-3 gap-8 pt-10">
                {
                    chooseCardData.map(card => <ChooseUsCard data={card} key={card.icon}/>)
                }
            </div>
        </Container>
    </div>
  )
}

export default WhyChooseUs