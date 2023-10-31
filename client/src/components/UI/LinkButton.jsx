import { Link } from 'react-router-dom';

const LinkButton = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="px-12 py-4 text-[#FAFAFA] bg-[#DB4444] inline-flex justify-center items-center font-poppins font-medium leading-6 rounded"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
