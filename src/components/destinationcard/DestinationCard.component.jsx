/* eslint-disable react/prop-types */
import bgimage from "../../assets/images/b2.jpeg";

const DestinationCardComponent = ({ details }) => {
  const { title, description, time } = details;
  return (
    <div className="dcard-container">
      <div className="dcard-container__main">
        <div className="dcard-container__main--bgimage">
          <img src={bgimage} alt="" />
        </div>
        <div className="dcard-container__main--button">
          <span>{time}</span>
        </div>
        <div className="dcard-container__main--content">
          <h3>{title}</h3>
          <p>{description}</p>
          <span>View all tours</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCardComponent;
