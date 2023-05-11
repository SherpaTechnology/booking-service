// eslint-disable-next-line react-refresh/only-export-components
export const BUTTON_TYPE_CLASSES = {
  normal: "normal",
  inverted: "inverted",
};

// eslint-disable-next-line react/prop-types
const ButtonComponent = ({ children, buttonType, ...inputOptions }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...inputOptions}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
