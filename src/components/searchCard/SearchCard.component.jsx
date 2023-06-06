import { useNavigate } from "react-router-dom";

const SearchCardComponent = () => {
  const navigate = useNavigate();
  const handleHoliday = () => {
    navigate(`/holidays/Annapurna Circuit Trek`);
  };
  return (
    <div className="search-card-container" onClick={() => handleHoliday()}>
      <div className="search-card-container__right">
        <div className="search-card-container__right--image">
          <img
            src="https://docs.google.com/uc?export=download&id=1YBHz72VKXRNUPge-h8pQvuVotim7LUq5"
            alt="Image"
            width="100%"
          />
        </div>
        <div className="search-card-container__right--text">
          <span>Jan</span>
          <span>Fav</span>
          <span>Mar</span>
          <span>Jun</span>
        </div>
      </div>
      <div className="search-card-container__left">
        <div className="search-card-container__left--title">
          <h2>Annapurna Circuit Trek</h2>
          <span>Nepal,ASIA 19 Nights</span>
        </div>
        <div className="search-card-container__left--altitude">
          <span>4000 - 6000m</span>
          <span>Altitude</span>
        </div>
        <div className="search-card-container__left--des">
          <p>
            Annapurna Circuit Trek in the Annapurna region of Nepal is the
            longest and one of the most diverse treks in the world. Walking the
            distance of 128miles through four districts (Lamjung, Manang,
          </p>
        </div>
        <div className="search-card-container__left--price">
          <span>$500PP</span>
          <div>OR</div>
          <span>$194/12 Months</span>
        </div>
      </div>
    </div>
  );
};

export default SearchCardComponent;
