import { useState, useRef, forwardRef } from 'react';
import classNames from 'classnames';

const InputFile = forwardRef(({ buttonText, placeholder, error, onBlur, onChange, name, required, helperText }, ref) => {
  const [fileName, setFileName] = useState(placeholder);
  const inputText = useRef(null);

  const setFileNameValue = (e) => {
    const name = e.target.value.replace(/.*[/\\]/, '');
    inputText.current.classList.add('text-black/[87%]')

    setFileName(name);
  };

  return (
    <label className="relative cursor-pointer text-base font-medium inline-flex rounded-[4px] w-full">
      <div
        className={classNames("border border-black/[87%] rounded-tl rounded-bl py-[12px] px-[15px]", {
          'border-red-500': error,
          'text-red-500': error,
        })}
      >
        {buttonText}
      </div>
      <div
        ref={inputText}
        className={classNames("w-full text-[#7E7E7E] py-[12px] px-[16px] border border-[#D0CFCF] border-l-0 rounded-tr rounded-br text-ellipsis whitespace-nowrap overflow-hidden", {
          'border-red-500': error
        })}
      >
        {fileName}
      </div>

      <input
        onChange={e => { onChange(e); onBlur(e); setFileNameValue(e) }}
        onBlur={onBlur}
        className="hidden"
        required={required}
        name={name}
        type="file"
        accept="image/jpeg"
        ref={ref}
      />

      {
        helperText && <div className={classNames(`absolute -bottom-[19px] left-[16px] text-sm font-normal text-[#7E7E7E]`, {
          'text-red-500': error
        })}>
          {helperText}
        </div>
      }
    </label>
  );
})

export default InputFile;
