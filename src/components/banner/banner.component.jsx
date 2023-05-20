import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../button/Button.component";
import bgimage from "../../assets/images/b2.jpeg";
import SelectInputComponent from "../../components/selectInput/SelectInput.component";

const selectValues = [
  {
    id: 1,
    title: "Choose  country",
    values: ["USA", "CANADA", "NEPAL", "JAPAN"],
    name: "country",
    iconName: "location",
  },
  {
    id: "2",
    title: "Choose Times",
    values: ["1-2 hours", "2-4 hours", "4-5 hours", "5-12 hours"],
    name: "time",
    iconName: "calendar"
  },
];
const DefaultSelectValues = {
  country: "",
  time: "",
};

const BannerComponent = () => {
  const [selectedForms, setSelectedForms] = useState(DefaultSelectValues);
  console.log("hhe", selectedForms);
  const handleSelected = e => {
    const { name, value } = e.target;
    setSelectedForms({ ...selectedForms, [name]: value });
  };
  const handleSubmitSelectedData = e => {
    e.preventDefault();
    alert("Data sumitted successfully!");
  };
  return (
    <div className="banner-content">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        speed={1000}
        autoplay={{ delay: 9500, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="banner-main"
      >
        <SwiperSlide>
          <div
            className="banner-main"
            style={{ backgroundImage: `url(${bgimage})` }}
          >
            <div className="content">
              <h1>Your Next Destinations</h1>
              <p>
                Yours go to altitude trekking experts for Everet and all the
                adventures in between .
              </p>
              <div className="wrapper">
                <div className="form">
                  <form action="">
                    <div className="form-input">
                      {selectValues.map(data => (
                          <SelectInputComponent
                            key={data.id}
                            title={data.title}
                            values={data.values}
                            name={data.name}
                            iconName={data.iconName}
                            onChange={e => handleSelected(e)}
                          />
                      ))}

                      <div className="button-select">
                        <ButtonComponent
                          buttonType={BUTTON_TYPE_CLASSES.normal}
                          onClick={e => handleSubmitSelectedData(e)}
                        >
                          Search <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </ButtonComponent>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerComponent;
