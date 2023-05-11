/* eslint-disable react/no-unescaped-entities */
import Layout from "../../common/layout/Layout";
import BannerComponent from "../../components/banner/banner.component";
import WhyChooseUsComponent from "../../components/whyChooseUs/WhyChooseUs.component";
import CardComponent from "../../components/cardcomponent/Card.component";
import ReviewCardComponent from "../../components/reviewCard/ReviewCard.component";
import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/Button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const cardsDetails = [
  {
    id: 1,
    title: "Everest Base Camp Trek",
    sub_title: "Nepal,ASIA-15 Nights",
    description:
      "Everest is more than a mountain and the journey to Everest Base Camp (5,364m/17,598ft) is more than just a trek. As you travel through Sherpa villages and take in the awe-inspiring views, you will want to come back again and again. The ultimate bucket listtrek for any active adventurer looking for their next bigchallenge....",
    months: [
      {
        id: 1,
        month_name: "May",
      },
      {
        id: 2,
        month_name: "Oct",
      },
      {
        id: 3,
        month_name: "Jun",
      },
      {
        id: 4,
        month_name: "Dec",
      },
    ],
  },
  {
    id: 1,
    title: "Everest Base Camp Trek",
    sub_title: "Nepal,ASIA-15 Nights",
    description:
      "Everest is more than a mountain and the journey to Everest Base Camp (5,364m/17,598ft) is more than just a trek. As you travel through Sherpa villages and take in the awe-inspiring views, you will want to come back again and again. The ultimate bucket listtrek for any active adventurer looking for their next bigchallenge....",
    months: [
      {
        id: 1,
        month_name: "May",
      },
      {
        id: 2,
        month_name: "Oct",
      },
      {
        id: 3,
        month_name: "Jun",
      },
      {
        id: 4,
        month_name: "Dec",
      },
    ],
  },
  {
    id: 1,
    title: "Everest Base Camp Trek",
    sub_title: "Nepal,ASIA-15 Nights",
    description:
      "Everest is more than a mountain and the journey to Everest Base Camp (5,364m/17,598ft) is more than just a trek. As you travel through Sherpa villages and take in the awe-inspiring views, you will want to come back again and again. The ultimate bucket listtrek for any active adventurer looking for their next bigchallenge....",
    months: [
      {
        id: 1,
        month_name: "May",
      },
      {
        id: 2,
        month_name: "Oct",
      },
      {
        id: 3,
        month_name: "Jun",
      },
      {
        id: 4,
        month_name: "Dec",
      },
    ],
  },
  {
    id: 2,
    title: "Everest Base Camp Trek",
    sub_title: "Nepal,ASIA-15 Nights",
    description:
      "Everest is more than a mountain and the journey to Everest Base Camp (5,364m/17,598ft) is more than just a trek. As you travel through Sherpa villages and take in the awe-inspiring views, you will want to come back again and again. The ultimate bucket listtrek for any active adventurer looking for their next bigchallenge....",
    months: [
      {
        id: 1,
        month_name: "May",
      },
      {
        id: 2,
        month_name: "Oct",
      },
      {
        id: 3,
        month_name: "Jun",
      },
      {
        id: 4,
        month_name: "Dec",
      },
    ],
  },
  {
    id: 3,
    title: "Everest Base Camp Trek",
    sub_title: "Nepal,ASIA-15 Nights",
    description:
      "Everest is more than a mountain and the journey to Everest Base Camp (5,364m/17,598ft) is more than just a trek. As you travel through Sherpa villages and take in the awe-inspiring views, you will want to come back again and again. The ultimate bucket listtrek for any active adventurer looking for their next bigchallenge....",
    months: [
      {
        id: 1,
        month_name: "May",
      },
      {
        id: 2,
        month_name: "Oct",
      },
      {
        id: 3,
        month_name: "Jun",
      },
      {
        id: 4,
        month_name: "Dec",
      },
    ],
  },
  {
    id: 1,
    title: "Everest Base Camp Trek",
    sub_title: "Nepal,ASIA-15 Nights",
    description:
      "Everest is more than a mountain and the journey to Everest Base Camp (5,364m/17,598ft) is more than just a trek. As you travel through Sherpa villages and take in the awe-inspiring views, you will want to come back again and again. The ultimate bucket listtrek for any active adventurer looking for their next bigchallenge....",
    months: [
      {
        id: 1,
        month_name: "May",
      },
      {
        id: 2,
        month_name: "Oct",
      },
      {
        id: 3,
        month_name: "Jun",
      },
      {
        id: 4,
        month_name: "Dec",
      },
    ],
  },
  {
    id: 4,
    title: "Everest Base Camp Trek",
    sub_title: "Nepal,ASIA-15 Nights",
    description:
      "Everest is more than a mountain and the journey to Everest Base Camp (5,364m/17,598ft) is more than just a trek. As you travel through Sherpa villages and take in the awe-inspiring views, you will want to come back again and again. The ultimate bucket listtrek for any active adventurer looking for their next bigchallenge....",
    months: [
      {
        id: 1,
        month_name: "May",
      },
      {
        id: 2,
        month_name: "Oct",
      },
      {
        id: 3,
        month_name: "Jun",
      },
      {
        id: 4,
        month_name: "Dec",
      },
    ],
  },
];

const reviewers = [
  {
    id: 1,
    name: "Phil Wills",
    description:
      "Morocco & Nepal I have recently completed two trips with EverTrek, oneto Morocco and one to Nepal. Both ...",
  },
  {
    id: 2,
    name: "Nabaraj Rai",
    description:
      "Morocco & Nepal I have recently completed two trips with EverTrek, oneto Morocco and one to Nepal. Both ...",
  },
  {
    id: 3,
    name: "Sherpa Sir",
    description:
      "Morocco & Nepal I have recently completed two trips with EverTrek, oneto Morocco and one to Nepal. Both ...",
  },
];

const Home = () => {
  return (
    <Layout>
      <BannerComponent />
      <WhyChooseUsComponent />
      <div className="wrapper">
        <div className="booking-section">
          <div className="booking-title-section">
            <span> Top Destinations</span>
            <h2>Advanture</h2>
          </div>
          <div className="card-components">
            {cardsDetails.map(data => (
              <CardComponent key={data.id} details={data} />
            ))}
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="about-section">
          <h2>About us</h2>
          <p>
            Everest is more than a mountain and the journey to Everest Base Camp
            (5,364m/17,598ft) is more than just a trek. As you travel through
            Sherpa villages and take in the awe-inspiring views, you will want
            to come back again and again. The ultimate bucket listtrek for any
            active adventurer looking for their next bigchallenge....
          </p>
          <p>
            Everest is more than a mountain and the journey to Everest Base Camp
            (5,364m/17,598ft) is more than just a trek. As you travel through
            Sherpa villages and take in the awe-inspiring views, you will want
            to come back again and again. The ultimate bucket listtrek for any
            active adventurer looking for their next bigchallenge....
          </p>
        </div>
      </div>
      <div className="wrapper">
        <div className="client-section">
          <div className="client-section__title">
            <span>What Our</span>
            <h2> Client Say</h2>
          </div>
          <div className="review-cards">
            {reviewers.map(data => (
              <ReviewCardComponent key={data.id} reviewer={data} />
            ))}
          </div>
        </div>
      </div>
      <div className="booking">
        <div className="wrapper">
          <div className="chat-section">
            <div className="chat-section__detail">
              <div className="chat-section__detail--title">
                <span>WE'D LOVE TO</span>
                <h2>Have a CHat</h2>
              </div>
              <p>
                If you would like to discuss your next adventure, have any
                questions or simply just a good old chin wag, then please call
                us, or send us a message.
              </p>
            </div>
            <div className="chat-section__call">
              <div className="chat-section__call--button">
                <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.normal}>
                  Book a call back 
                </ButtonComponent>
              </div>
              <div className="chat-section__call--number">
                <span><FontAwesomeIcon icon={faPhone}/> 9803045098</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
