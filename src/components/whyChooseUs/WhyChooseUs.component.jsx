import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../button/Button.component";

const WhyChooseUsComponent = () => {
  return (
    <div className="wrapper">
      <div className="main-content">
        <div className="whychoose-right">
          <p className="top-paragraph">
            Join us on one of our life-changing ‘EverTreks’ as we climb onto a
            windy ridge or even an African volcano at 18,000ft. Follow in the
            famous footsteps of Hilary and Mallory to Everest or take on one of
            the seven summits whilst immersing yourself in the friendly local
            cultures.
          </p>
          <p className="top-paragraph">
            Join us on one of our life-changing ‘EverTreks’ as we climb onto a
            windy ridge or even an African volcano at 18,000ft. Follow in the
            famous footsteps of Hilary and Mallory to Everest or take on one of
            the seven summits whilst immersing yourself in the friendly local
            cultures.
          </p>
          <div className="whychoose-button">
            <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.inverted}>
              Why choose us
            </ButtonComponent>
            <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.normal}>
              View Destinations
            </ButtonComponent>
          </div>
        </div>
        <div className="whychoose-left">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            // eslint-disable-next-line react/no-unknown-property
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsComponent;
