const SelectInputComponent = ({ ...otherProps }) => {
  return (
    <div className="select-container">
      <label>Country</label>
      <select id="country" name="country" {...otherProps}>
        <option value="australia">Choose any locations</option>
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
    </div>
  );
};

export default SelectInputComponent;
