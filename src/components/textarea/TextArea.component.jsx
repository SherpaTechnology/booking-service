/* eslint-disable react/prop-types */
const TextAreaComponent = ({ ...otherProps }) => {
  return <textarea className="text-area" {...otherProps} />;
};

export default TextAreaComponent;
