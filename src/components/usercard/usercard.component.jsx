/* eslint-disable react/prop-types */
import avatar from "../../assets/images/avatar.png";

const UsercardComponent = ({ details }) => {
  const { name, position, description } = details;
  return (
    <div className="user-container">
      <div className="user-container__main">
        <img src={avatar} alt="avatar" />
        <div className="user-container__main--description">
          <h3>{name}</h3>
          <span>{position}</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default UsercardComponent;
