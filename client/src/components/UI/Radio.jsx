const Radio = ({ text, name, color = null, ...props }) => {
  const boxStyle = {
    backgroundColor: color ? color : '', // Use a ternary operator
  };
  return (
    <label className="label">
      <input
        className="radio mr-2"
        style={boxStyle}
        type="radio"
        name={name}
        {...props}
      />
      <span>{text}</span>
    </label>
  );
};

export default Radio;
