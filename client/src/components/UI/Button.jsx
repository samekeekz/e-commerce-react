const Button = ({ children }) => {
  return (
    <button className="px-12 py-4 text-[#FAFAFA] bg-[#DB4444] inline-flex justify-center items-center font-poppins font-medium leading-6 rounded">
      {children}
    </button>
  );
};

export default Button;
