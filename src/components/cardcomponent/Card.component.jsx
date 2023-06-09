/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import bgImg from "../../assets/images/b2.jpeg";
import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../button/Button.component";
import { IdContext } from "../../contexts/searchcard/search.context";
const CardComponent = ({ details }) => {
  const { title, sub_title, description, months, id, price, priceWithTime } =
    details;

  const navigate = useNavigate();
  const { setId } = useContext(IdContext);
  const navigateToPreview = name => {
    navigate(`/holidays/${name}`);
    setId(id);
  };
  return (
    <div className="card-container">
      <div className="cards" onClick={() => navigateToPreview(title)}>
        <div key={id} className="cards__content">
          <div className="cards__content--image">
            <img src={bgImg} alt={`${title}`} />
          </div>
          <div className="cards__content--modify">
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
            <div className="cards__description--priceline">
              <span>{price}</span>
              <span>{priceWithTime}</span>
            </div>
          </div>
          <div className="cards__description-des">
            <p>{description}</p>
          </div>
        </div>

        <div className="card__button">
          <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.normal}>
            Learn More! <FontAwesomeIcon icon={faArrowRight} />
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
