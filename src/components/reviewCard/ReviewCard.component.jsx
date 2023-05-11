import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../button/Button.component";

const ReviewCardComponent = ({ reviewer }) => {
  const { name, description } = reviewer;
  return (
    <div className="review-cards-container">
      <div className="review-cards-container__main">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="review-cards-container__main--button">
          <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.normal}>
            Read More <FontAwesomeIcon icon={faArrowRight} />
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default ReviewCardComponent;
