const Radio = ({ text, name, color = null }) => {
  const boxStyle = {
    backgroundColor: color ? color : '', // Use a ternary operator
  };
  return (
    <label className="label">
      <input className="radio mr-2" style={boxStyle} type="radio" name={name} />
      <span>{text}</span>
    </label>
  );
};

export default Radio;
