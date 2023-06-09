import PropTypes from 'prop-types';

const colors = {
  yellow: 'bg-primary text-black hover:bg-primary-hover',
}

const Button = ({ type = "button", color, children, onClick }) => {
  let colorClasses = colors[color];

  return (
    <button
      onClick={onClick}
      type={type}
      className={`min-w-[100px] whitespace-nowrap text-base rounded-full py-[4px] px-[23px] border-rad ${colorClasses}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  "type": PropTypes.string,
  "color": PropTypes.string,
  "children": PropTypes.string,
  "onClick": PropTypes.func,
}
export default Button;
