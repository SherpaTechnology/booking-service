/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const InputComponent = ({ children, label, ...otherProps }) => {
  return (
    <div className="group">
      <input type="text" className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default InputComponent;
