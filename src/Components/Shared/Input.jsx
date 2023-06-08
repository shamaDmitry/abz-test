import React from 'react';

const Input = ({ className, placeholder, helperText }) => {
  return (
    <div class={`relative ${className}`}>
      <input type="text" class="block w-full py-2 px-5 text-base bg-light-gray text-black rounded-[4px] border-2 border-[#D0CFCF] appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />

      <label class="pointer-events-none absolute text-base text-[#7E7E7E] duration-300 transform -translate-y-4 top-1 z-10 origin-[0] bg-light-gray px-2 peer-focus:px-2 peer-focus:text-sm peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 left-1">
        {placeholder}
      </label>

      {
        helperText && <div className="absolute -bottom-5 text-sm font-normal text-[#7E7E7E]">
          {helperText}
        </div>
      }
    </div>
  );
}

export default Input;
