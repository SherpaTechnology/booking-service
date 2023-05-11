/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import bgImg from "../../assets/images/b2.jpeg";
import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../button/Button.component";
const CardComponent = ({ details }) => {
  const { title, sub_title, description, months, id } = details;
  return (
    <div className="card-container">
      <div className="cards">
        <div key={id} className="cards__image-section">
          <div className="cards__image-section--image">
            <img src={bgImg} alt={`${title}`} />
          </div>
          <div className="cards__image-section--modify">
            {months.map(month => (
              <span key={month.id}>{month.month_name}</span>
            ))}
          </div>
        </div>
        <div className="cards__description">
          <div className="cards__description--title">
            <h3>{title}</h3>
            <h3>
              <span>{sub_title}</span>
            </h3>
          </div>
          <div className="cards__description-des">
            <p>{description}</p>
          </div>
        </div>

        <div className="card__button">
          <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.normal}>
            Learn More!
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
