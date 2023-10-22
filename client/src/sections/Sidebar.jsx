import { useState } from 'react';
import Category from './Category';
import Colors from './Colors';
import Price from './Price';

const Sidebar = ({ filter, setFilter }) => {
  return (
    <div className=" border-r-[2px] h-[110%] border-[#d6d4d4] w-full flex flex-col gap-y-4">
      <Category filter={filter} setFilter={setFilter} />
      <Price filter={filter} setFilter={setFilter} />
      {/* <Colors /> */}
    </div>
  );
};

export default Sidebar;
