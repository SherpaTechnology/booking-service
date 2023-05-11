import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../button/Button.component";
import bgimage from "../../assets/images/b2.jpeg";
import SelectInputComponent from "../../components/selectInput/SelectInput.component";

const BannerComponent = () => {
  return (
    <div className="banner-content">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        speed={1000}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
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
              <div className="form">
                <form action="">
                  <div className="form-input">
                    <SelectInputComponent />
                    <SelectInputComponent />
                  </div>

                  <div className="button-select">
                    <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.normal}>
                      Search
                    </ButtonComponent>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerComponent;
