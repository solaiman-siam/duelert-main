import Calender from '../../assets/images/calender.png'
import Support from '../../assets/images/customer.png'
import Reminder from '../../assets/images/reminder.png'
import People from '../../assets/images/people.png'
import Pricing from '../../assets/images/pricing.png'

function Sidebar() {


    const navnMenu = [
        {
            name: 'Calendar',
            icon: Calender
        },
        {
            name: 'Reminder',
            icon: Support,
            dropdown: true
        },
        {
            name: 'People',
            icon: Reminder
        },
        {
            name: 'People',
            icon: People 
        },
        {
            name: 'Pricing',
            icon: Pricing
        },
    ]

  return (
    <div>
        <div>
            <div><img src="" alt="" /></div>
            <h3>Main Menu</h3>
        </div>

        <div>
            {
//                 navnMenu.map(menu => <div>
                    
// <img src={menu.icon} alt="" />                    <h4>{menu.name}</h4>
//                      </div>)
            }
        </div>
    </div>
  )
}

export default Sidebar