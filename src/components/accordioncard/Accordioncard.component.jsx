import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const AccordioncardComponent = details => {
  const [isActive, setIsActive] = useState(false);
  const { title, content } = details.details;
  return (
    <div className="accordion">
      <div className="accordion__title" onClick={() => setIsActive(!isActive)}>
        <h3>{title} </h3>
        <div className="icon">
          <FontAwesomeIcon
            icon={faAngleDown}
            className={` arrow-icon ${isActive ? "rotate" : ""}`}
          />
        </div>
      </div>

      <div className={`accordion__description ${isActive ? "show" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AccordioncardComponent;
