/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line react-refresh/only-export-components

const SelectInputComponent = ({ iconName, ...otherProps }) => {
  return (
    <div className="select-container">
      <div className="icon">
        {iconName && iconName === "location" ? (
          <FontAwesomeIcon icon={faLocationDot} />
        ) : (
          <FontAwesomeIcon icon={faCalendarDays} />
        )}
      </div>
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
              <div className="select-option">{data}</div>
            </option>
          ))}
      </select>
    </div>
  );
};

export default memo(SelectInputComponent);
