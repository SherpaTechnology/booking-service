/* eslint-disable react/prop-types */
const CheckboxInputComponent = ({ label, ...otherProps }) => {
  return (
    <div className="checkbox-group">
      <input className="checkbox-input" {...otherProps} />
      <label className="checkbox-label">{label}</label>
    </div>
  );
};

export default CheckboxInputComponent;
