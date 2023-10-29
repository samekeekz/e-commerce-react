import React from 'react';

const Input = ({ id, value, ...props }) => {
  return (
    <div>
      <input
        id={id}
        value={value}
        type="number"
        className="bg-[#fafafa] h-[50px] text-sm border-solid border-[1px] border-[#dbdeeb] rounded-[3px] leading-[50px] text-center w-[85px] pt-0 pb-0 pl-[10px] pr-[10px]"
        {...props}
      />
    </div>
  );
};

export default Input;
