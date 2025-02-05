import { keyHighlightsData } from "../../lib/staticData"
import CommonHead from "../shared/CommonHead"
import CommonSubHead from "../shared/CommonSubHead"
import Container from "../shared/Container"
import KeyHighlightCard from "./KeyHighlightCard"


function  KeyHighlights() {
  return (
    <div className="py-24">
        <Container>
            <div className="flex  justify-center items-center flex-col">
            <CommonSubHead subhead={'Our key highlights'}/>
            <CommonHead head={'This is what makes us the best'}/>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10">
                {
                    keyHighlightsData.map(card => <KeyHighlightCard data={card} key={card.icon}/>)
                }
            </div>
        </Container>
    </div>
  )
}

export default KeyHighlights