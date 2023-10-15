"use client"
import { NavItem } from '@/constants/constants';
import { useRouter } from 'next/navigation';

interface SideNavProp{
  activeItem?: number
}
export const SideNav:React.FC<SideNavProp> = ({activeItem}) => {
  const router = useRouter();

  return (
    <nav className="fixed top-[100px] left-0 bottom-0  bg-color w-[270px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col items-center py-8 border-r-2 border-[rgba(0,_0,_0,_0.24)] max-slg:hidden">
      <ul>
        {NavItem.map((item, index) => (
          <div onClick={()=> router.push(item.href)} key={index} className='cursor-pointer'>
            <li
              className={`nav-hover flex justify-between w-[210px] relative text-gray-700 mb-[20px] transition duration-300 rounded-lg bg-[#E3F0F9] pl-[10px] py-2 ${
                index === activeItem ? 'active' : '' 
              }`}
            >
              <div className="flex gap-2">
                <div className="p-2 border-[1px] border-gray-300 rounded-lg flex items-center item-icon">
                  <span>{item.icon}</span>
                </div>
                <span className="flex items-center">{item.page}</span>
              </div>
              <div className="w-[20px] h-[50px] absolute top-0 right-0 bg-[#AED6EF] rounded-l-full"></div>
            </li>
          </div>
        ))}

      </ul>
    </nav>
  );
};
