import { useState, useRef } from 'react';

const InputFile = () => {
  const [fileName, setFileName] = useState('Upload your photo');
  const inputText = useRef(null);

  const onChange = (e) => {
    const name = e.target.value.replace(/.*[/\\]/, '');
    inputText.current.classList.add('text-black/[87%]')

    setFileName(name);
  }

  return (
    <label className="cursor-pointer text-base font-medium inline-flex rounded-[4px] w-full">
      <div className="border border-black/[87%] rounded-tl rounded-bl py-[12px] px-[15px]">
        Upload
      </div>
      <div
        ref={inputText}
        className="w-full text-[#7E7E7E] py-[12px] px-[16px] border border-[#D0CFCF] border-l-0 rounded-tr rounded-br text-ellipsis whitespace-nowrap overflow-hidden"
      >
        {fileName}
      </div>

      <input
        onChange={onChange}
        className="hidden"
        type="file"
      />
    </label>
  );
}

export default InputFile;
