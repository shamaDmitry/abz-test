import PropTypes from 'prop-types';
import { forwardRef } from 'react'
import classNames from "classnames";

const Input = forwardRef(({ onChange, onBlur, name, className, placeholder, helperText, defaultValue, required, errors }, ref) => {
  console.log(errors);


  return (
    <div className="relative">
      {/* <div class="relative">
        <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-[2px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

        <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Floating outlined</label>
      </div> */}


      <input
        ref={ref}
        defaultValue={defaultValue}
        name={name}
        onBlur={onBlur}
        required={required}
        onChange={onChange}
        type="text"
        className={classNames(`${className} block w-full py-[13px] px-[16px] text-base bg-light-gray text-black rounded-[4px] border-2 border-[#D0CFCF] appearance-none focus:outline-none focus:ring-0 peer`, {
          'border-red-500': errors
        })}
        placeholder=" "
      />

      <label className={classNames(`pointer-events-none absolute text-base text-[#7E7E7E] duration-300 transform left-[12px] top-1/2 z-10 origin-[0] bg-light-gray px-[4px] peer-focus:px-2 peer-focus:text-sm peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4`, {
        'text-red-500': errors
      })}>
        {placeholder}
      </label>

      {
        helperText && <div className={classNames(`absolute -bottom-[19px] left-[16px] text-sm font-normal text-[#7E7E7E]`, {
          'text-red-500': errors
        })}>
          {helperText}
        </div>
      }
    </div>
  );
});

Input.propTypes = {
  "className": PropTypes.string,
  "placeholder": PropTypes.string,
  "helperText": PropTypes.string,
}

export default Input;

