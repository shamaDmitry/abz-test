import PropTypes from 'prop-types';
import { forwardRef } from 'react'
import classNames from "classnames";

const Input = forwardRef(({ onChange, onBlur, name, className, placeholder, helperText, defaultValue, required, error }, ref) => {
  return (
    <div className="relative">
      <input
        ref={ref}
        defaultValue={defaultValue}
        name={name}
        onBlur={onBlur}
        required={required}
        onChange={onChange}
        type="text"
        className={classNames(`${className} peer placeholder-transparent block w-full py-[13px] px-[16px] text-base bg-light-gray text-black rounded-[4px] border-2 border-[#D0CFCF] appearance-none focus:outline-none focus:ring-0`, {
          'border-red-500': error
        })}
        placeholder=" "
      />

      <label
        className={classNames("pointer-events-none absolute text-sm px-2 bg-light-gray text-[#7E7E7E] left-[9px] -top-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2 peer-focus:text-sm", {
          'text-red-500': error
        })}
      >
        {placeholder}
      </label>

      {
        helperText && <div className={classNames(`absolute -bottom-[19px] left-[16px] text-sm font-normal text-[#7E7E7E]`, {
          'text-red-500': error
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

