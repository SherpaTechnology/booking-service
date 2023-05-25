import bgimg from "../../assets/images/b2.jpeg";

const SearchBannerComponent = () => {
  return (
    <div className="search-container">
      <div
        className="search-container__main"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="wrapper">
          <div className="search-container__main--description">
            <h1>Search Tours</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBannerComponent;
