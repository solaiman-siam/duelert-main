import CakeIcon from "../assets/images/Birthday.png";
import Cart from "../assets/images/Cart.png";
import Email from "../assets/images/Email.png";
import Thunder from "../assets/images/thunder.png";
import Database from "../assets/images/database.png";
import Donate from "../assets/images/donate.png";

export const chooseCardData = [
  {
    id: 1,
    title: "Customer’s Birthdays",
    description:
      "Celebrate with us! Enjoy exclusive discounts and personalized offers on your special day. Join our birthday club for VIP treatment and unforgettable surprises.",
    icon: CakeIcon,
  },
  {
    id: 2,
    title: "Festive Greetings",
    description:
      "Renew your vehicle hassle-free with us! Enjoy streamlined processes, timely reminders, and expert assistance. Stay on the road smoothly with our efficient renewal services.",
    icon: Email,
  },
  {
    id: 3,
    title: "Anniversaries of any kind",
    description:
      "Celebrate milestones with us! Whether it's a work anniversary, relationship milestone, or any special occasion, mark the moment with our tailored surprises and heartfelt gestures.",
    icon: Cart,
  },
];

export const keyHighlightsData = [
  {
    id: 1,
    title: "Fast Scheduling",
    description:
      "It takes just a few clicks to set your schedules and reminders",
    icon: Thunder,
    image: 'https://images.pexels.com/photos/30388453/pexels-photo-30388453/free-photo-of-cozy-morning-with-coffee-and-magazine-on-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: "Available Space",
    description:
      "Just enough space and storage to save your customers’ data and dates",
    icon: Database,
    image: 'https://images.pexels.com/photos/30388453/pexels-photo-30388453/free-photo-of-cozy-morning-with-coffee-and-magazine-on-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: "Afforfable and Easy",
    description: "Very affordable Prices and easy to use interface",
    icon: Donate,
    image: 'https://images.pexels.com/photos/30388453/pexels-photo-30388453/free-photo-of-cozy-morning-with-coffee-and-magazine-on-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
];


export const pricingData = [
  {
    "id": 1,
    "plan": "Starter",
    "price": 19,
    "billingCycle": "month",
    "description": "Unleash the power of automation.",
    "features": [
      "50 customers only",
      "5 Gigabyte of space",
      "200 SMS per week",
      "Customize birthday message"
    ]
  },
  {
    "id": 2,
    "plan": "Professional",
    "price": 54,
    "billingCycle": "month",
    "description": "Advanced tools to take your work to the next level.",
    "features": [
      "100 customers only",
      "10 Gigabyte of space",
      "500 SMS per week",
      "Customize birthday message"
    ]
  },
  {
    "id": 3,
    "plan": "Company",
    "price": 89,
    "billingCycle": "month",
    "description": "Automation plus enterprise-grade features.",
    "features": [
      "1000 customers only",
      "100 Gigabyte of space",
      "5000 SMS per week",
      "Customize birthday message"
    ],
    "mostPopular": true
  }
]
