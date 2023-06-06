import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../button/Button.component";

const BookcardComponent = () => {
  return (
    <div className="book-container">
      <div className="book-container__date">
        <span className="book-container__date--first">October 14 2023 - </span>
        <span className="book-container__date--second">October 28 2023</span>
      </div>
      <div className="book-container__price">
        <span>£2,145PP</span>
        <div className="book-container__price--title">OR</div>
        <span>£487 / 4 MONTHS</span>
      </div>
      <div className="book-container__space">
        <p>10 Available Spaces</p>
      </div>
      <div className="book-container__button">
        <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.inverted}>
          Book Now
        </ButtonComponent>
      </div>
    </div>
  );
};

export default BookcardComponent;
