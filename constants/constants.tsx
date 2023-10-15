import {AiOutlineDollar} from 'react-icons/ai'
import {PiHandshakeFill} from 'react-icons/pi'
import { BiLogOut} from 'react-icons/bi'
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
        href: '/dashboard',
        index: 0,
    },
    {
        icon: <BsFillBagCheckFill/>,
        page: 'Bookings',
        href: '/dashboard/bookings',
        index: 1,
    },
    {
        icon: <BsFillCarFrontFill/>,
        page: 'Cars',
        href: '/dashboard/cars',
        index: 2,
    },
    {
        icon: <HiUsers/>,
        page: 'Riders',
        href: '/dashboard/riders',
        index: 3,
    },
    {
        icon: <RiHistoryFill/>,
        page: 'Track Bookings',
        href: '#',
        index: 4,
    },
    {
        icon: <RiCustomerService2Fill/>,
        page: 'Customer Support',
        href: '/dashboard/customer-support',
        index: 5,
    },
    {
        icon: <BiLogOut/>,
        page: 'Sign Out',
        href: '/api/auth/signout'
    },

]