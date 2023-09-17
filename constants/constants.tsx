import {AiOutlineDollar} from 'react-icons/ai'
import {PiHandshakeFill} from 'react-icons/pi'
import {BsShieldFillCheck, BsFillCarFrontFill, BsFillBagCheckFill} from 'react-icons/bs'
import {TfiHeadphoneAlt} from 'react-icons/tfi'
import {HiUsers} from 'react-icons/hi'
import {RiCustomerService2Fill, RiHistoryFill, RiHomeHeartFill} from 'react-icons/ri'
export const servicesArr = [
    {
        icon: <AiOutlineDollar/>,
        heading: 'All inclusive pricing',
        description: 'Our rates are transparent,  Your Fare Covers Everything.'
    },
    {
        icon: <PiHandshakeFill/>,
        heading: 'No hidden charges',
        description: 'Know your cost upfront, no hidden fees'
    },
    {
        icon: <TfiHeadphoneAlt/>,
        heading: 'Awesome customer support',
        description: 'Exceptional Customer Care for an Awesome Experience.'
    },
    {
        icon: <BsFillCarFrontFill/>,
        heading: 'Quality Drivers',
        description: 'Skilled Drivers Ensuring Exceptional Travel Experiences'
    },
    {
        icon: <BsShieldFillCheck/>,
        heading: 'Secure Travel Solutions',
        description: 'Reliable and Safe Transportation for Your Peaceful Journeys.'
    },

]


export const NavItem = [
    {
        icon: <RiHomeHeartFill/>,
        page: 'Home',
    },
    {
        icon: <BsFillBagCheckFill/>,
        page: 'Bookings',
    },
    {
        icon: <BsFillCarFrontFill/>,
        page: 'Cars'
    },
    {
        icon: <HiUsers/>,
        page: 'Riders',
    },
    {
        icon: <RiHistoryFill/>,
        page: 'Track Bookings',
    },
    {
        icon: <RiCustomerService2Fill/>,
        page: 'Customer Support',
    },
    {
        icon: <PiHandshakeFill/>,
        page: 'Sign Out',
    },

]