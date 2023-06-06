import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const AccordioncardComponent = details => {
  const [isActive, setIsActive] = useState(false);
  const { title, content } = details.details;
  return (
    <div className="accordion">
      <div className="accordion__title" onClick={() => setIsActive(!isActive)}>
        <h3>{title} </h3>
        <div className="icon">
          {isActive ? (
            <FontAwesomeIcon icon={faMinus} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </div>
      </div>
      {isActive && (
        <div className="accordion__description">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordioncardComponent;
