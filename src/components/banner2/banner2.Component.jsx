import bgimage from "../../assets/images/b2.jpeg";

const banner2Component = ({ title, description }) => {
  return (
    <div className="banner-container">
      <div
        className="banner-container__main"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="banner-container__main--content">
          <h1>{title}</h1>
          <p>{description} </p>
        </div>
      </div>
    </div>
  );
};

export default banner2Component;
