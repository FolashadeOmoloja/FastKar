"use client"
import Link from 'next/link';
import { NavItem } from '@/constants/constants';
import { useState } from 'react';

export const SideNav = () => {
  const [activeItem, setActiveItem] = useState(0); // Initialize with null

  const handleItemClick = (index: number) => {
    setActiveItem(index);
    // You can also perform other actions related to item click here.
  };

  return (
    <nav className="top-[100px] left-0 bottom-0 h-[100vh] bg-color w-[270px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col items-center py-7 border-r-2 border-[rgba(0,_0,_0,_0.24)] max-sm:hidden">
      <ul>
        {NavItem.map((item, index) => (
          <Link href={item.href} key={item.index}>
            <li
              onClick={() => handleItemClick(index)} // Call the click handler with the index
              className={`nav-hover flex justify-between w-[210px] relative text-gray-700 mb-[20px] transition duration-300 rounded-lg bg-[#E3F0F9] pl-[10px] py-2 ${
                index === activeItem ? 'active' : '' // Apply active class conditionally
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
          </Link>
        ))}
      </ul>
    </nav>
  );
};
