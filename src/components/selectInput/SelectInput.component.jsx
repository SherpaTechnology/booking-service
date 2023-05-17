/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const SelectInputComponent = ({ ...otherProps }) => {
  return (
    <div className="select-container">
      <select
        id="country"
        defaultValue={"DEFAULT"}
        name="country"
        {...otherProps}
      >
        <option value="DEFAULT" disabled>
          {otherProps.title}
        </option>
        {otherProps.values &&
          otherProps.values.map((data, i) => (
            <option key={i} value={data}>
              {data}
            </option>
          ))}
      </select>
    </div>
  );
};

export default memo(SelectInputComponent);
