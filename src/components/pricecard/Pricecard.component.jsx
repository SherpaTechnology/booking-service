/* eslint-disable no-undef */
/* eslint-disable react/no-danger-with-children */
/* eslint-disable react/prop-types */
const PricecardComponent = ({ details }) => {
  const { title, content } = details;
  return (
    <div className="tab5-booking-title">
      <div className="tab5-booking-title__details">
        <span>{title}</span>
        <div className="tab5-booking-title__details--modifier">
          <h3 dangerouslySetInnerHTML={{ __html: content }}></h3>
        </div>
      </div>
    </div>
  );
};

export default PricecardComponent;
