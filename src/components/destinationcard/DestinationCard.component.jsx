/* eslint-disable react/prop-types */

const DestinationCardComponent = ({ details }) => {
  const { title, description, time } = details;
  return (
    <div className="dcard-container">
      <div className="dcard-container__main">
        <div className="dcard-container__main--bgimage">
        <img
            src="https://docs.google.com/uc?export=download&id=1U4Z-2GJcRDtIAmZt4ej0MOF_NvA0ntzS"
            alt="Image"
            width="100%"
          />
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
