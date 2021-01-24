const buttonColor = {
  indigo: 'from-indigo-300 to-indigo-400',
  gray: 'from-gray-300 to-gray-400',
};

const Button = ({ children, color = 'indigo', full }) => {
  const fullWidth = full ? 'flex-grow' : 'w-auto';

  const classNames = `card bg-gradient-to-bl text-center font-medium
    hover:shadow-lg cursor-pointer transition duration-200
    ${buttonColor[color]} ${fullWidth}`;

  return <div className={classNames}>{children}</div>;
};

export default Button;
