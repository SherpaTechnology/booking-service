import bgimage from "../../assets/images/b2.jpeg"

const banner2Component = () => {
  return (
    <div className="banner-container">
      <div className="banner-container__main" style={{backgroundImage: `url(${bgimage})`}}>
        <div className="banner-container__main--content">
          <h1>Knowledge Center</h1>
          <p>
            Your go-to altitide experts for Everest, Machu Pichu and many more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default banner2Component;
