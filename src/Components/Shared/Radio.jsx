import PropTypes from 'prop-types';
import { forwardRef } from 'react'

const beforeCls = "before:transition before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:absolute before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#00BDD3] before:opacity-0 "

const Radio = forwardRef(({ onChange, onBlur, name, label, checked }, ref) => {
  return (
    <label className="cursor-pointer inline-flex items-center mb-[7px] last:mb-0">
      <input
        type="radio"
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        ref={ref}
        checked={checked}
        className={`transition relative appearance-none w-5 h-5 border rounded-full bg-white border-[#D0CFCF] checked:border-[#00BDD3] checked:before:opacity-100 ${beforeCls}`}
      />

      <div className="ml-3 text-base font-normal text-black">
        {label}
      </div>
    </label>
  );
})

Radio.propTypes = {
  "label": PropTypes.string,
  "name": PropTypes.string,
}

export default Radio;
