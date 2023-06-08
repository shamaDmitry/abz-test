import React from 'react';

const colors = {
  yellow: 'bg-primary text-black hover:bg-primary-hover',
}

const Button = ({ type, size, children }) => {
  let colorClasses = colors[type];

  return (
    <button className={`min-w-[100px] whitespace-nowrap text-base rounded-full py-[4px] px-[23px] border-rad ${colorClasses}`}>
      {children}
    </button>
  );
}

export default Button;
