import { useState } from 'react';
import Category from './Category';
import Colors from './Colors';
import Price from './Price';
import { useParams } from 'react-router-dom';

const Sidebar = () => {
  console.log(useParams());
  return (
    <div className=" border-r-[2px] h-[110%] border-[#d6d4d4] w-full flex flex-col gap-y-4">
      <Category />
      <Price />
      {/* <Colors /> */}
    </div>
  );
};

export default Sidebar;
