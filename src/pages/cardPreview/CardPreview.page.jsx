/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import AccordioncardComponent from "../../components/accordioncard/Accordioncard.component";
import Layout from "../../common/layout/Layout";
import SearchBannerComponent from "../../components/searchBanner/SearchBanner.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain,
  faCalendarDays,
  faTag,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/Button.component";
import PricecardComponent from "../../components/pricecard/pricecard.component";
import BookcardComponent from "../../components/bookcard/Bookcard.component";

const accordionData = [
  {
    title: "Day 1 - Welcome to Kathmandu ",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
  },
  {
    title:
      "Day 2 - Kathmandu Valley sightseeing and trek preparation (1,300m/4,264 ft) ",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit! Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
  {
    title:
      "Day 3 - Drive/Flight from Kathmandu to Pokhara (820m/2,690ft) 6-7 hours ",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
  {
    title:
      "Day 4 - Drive/Flight from Kathmandu to Pokhara (820m/2,690ft) 6-7 hours ",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
  {
    title:
      "Day 5 - Drive/Flight from Kathmandu to Pokhara (820m/2,690ft) 6-7 hours ",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
];

const infodata = [
  {
    title: "Day 1 - Welcome to Kathmandu ",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
  },
  {
    title:
      "Day 2 - Kathmandu Valley sightseeing and trek preparation (1,300m/4,264 ft) ",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit! Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
];
const priceDetails = [
  {
    title: "First...",
    content: "<span>Deposit</span> £200",
  },
  {
    title: "Then...",
    content: "<span>12 Monthly Payments From</span> £240",
  },
  {
    title: "OR...",
    content: "<span>1 Full Payment From</span> £2,145PP",
  },
];
const CardPreviewPage = () => {
  const [tabName, setTabName] = useState(1);
  const handleTab = name => {
    setTabName(name);
  };
  return (
    <Layout>
      <div className="banner-section">
        <SearchBannerComponent />
      </div>
      <div className="card-preview-section">
        <div className="wrapper">
          <div className="price-section-container">
            <div className="height-section-info">
              <div className="icon">
                <FontAwesomeIcon icon={faMountain} />
              </div>
              <span>4000 - 6000M</span>
            </div>
            <div className="day-section-info">
              <div className="icon">
                <FontAwesomeIcon icon={faCalendarDays} />
              </div>
              <span>15 Days</span>
            </div>
            <div className="price-section-info">
              <div className="icon">
                <FontAwesomeIcon icon={faTag} />
              </div>
              <span>£2,145PP</span>
            </div>
          </div>
        </div>
      </div>
      <div className="details-section">
        <div className="wrapper">
          <div className="details-section-container">
            <div
              className={`details-section-container__modify  ${
                tabName === 1 ? "active" : ""
              }`}
              onClick={() => handleTab(1)}
            >
              <h3>Trip Overview</h3>
            </div>
            <div
              className={`details-section-container__modify  ${
                tabName === 2 ? "active" : ""
              }`}
              onClick={() => handleTab(2)}
            >
              <h3>Itinary</h3>
            </div>
            <div
              className={`details-section-container__modify  ${
                tabName === 3 ? "active" : ""
              }`}
              onClick={() => handleTab(3)}
            >
              <h3>Extra info</h3>
            </div>
            <div
              className={`details-section-container__modify  ${
                tabName === 4 ? "active" : ""
              }`}
              onClick={() => handleTab(4)}
            >
              <h3>More info</h3>
            </div>
            <div
              className={`details-section-container__modify  ${
                tabName === 5 ? "active" : ""
              }`}
              onClick={() => handleTab(5)}
            >
              <h3>Book</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="details-active">
        <div className="wrapper">
          <div className={`tab1 ${tabName === 1 ? "d-block" : "d-none"}`}>
            <div className="tab1__paragraph">
              <p>
                Annapurna Base Camp is one of the best viewpoints in the world,
                where you can enjoy the dramatic views of the
                amphitheatre-shaped ‘Annapurna Massif’. This 55-km long massif
                containing one peak over 8000m, 13 peaks over 7000m and 16 peaks
                over 6000m is something to behold.
              </p>
              <p>
                Annapurna Base Camp is one of the best viewpoints in the world,
                where you can enjoy the dramatic views of the
                amphitheatre-shaped ‘Annapurna Massif’. This 55-km long massif
                containing one peak over 8000m, 13 peaks over 7000m and 16 peaks
                over 6000m is something to behold.
              </p>
              <div className="tab1__paragraph--modifier">
                <p>Join us on the Annapurna Base Camp trek</p>
                <ul>
                  <li>
                    Our Annapurna Base Camp Trek includes 2 nights spent near
                    the beautiful lakeside city of Pokhara
                  </li>
                  <li>
                    Our Annapurna Base Camp Trek includes 2 nights spent near
                    the beautiful lakeside city of Pokhara
                  </li>
                  <li>
                    Our Annapurna Base Camp Trek includes 2 nights spent near
                    the beautiful lakeside city of Pokhara
                  </li>
                  <li>
                    Our Annapurna Base Camp Trek includes 2 nights spent near
                    the beautiful lakeside city of Pokhara
                  </li>
                  <li>
                    Our Annapurna Base Camp Trek includes 2 nights spent near
                    the beautiful lakeside city of Pokhara
                  </li>
                </ul>
              </div>
              <div className="tab1__details">
                <div className="tab1__details--modifier">
                  <h2>What's included ?</h2>
                  <ul>
                    <li>
                      Bus transportation (Tourist Coach) to Pokhara and return
                      from Pokhara (Depending on the conditions, we will
                      organise flights for this instead)
                    </li>
                    <li>Airport Pick-up and Drop-off</li>
                    <li>Airport Pick-up and Drop-off</li>
                    <li>
                      Airport Pick-up and Drop-off Bus transportation (Tourist
                      Coach) to Pokhara and return from Pokhara (Depending on
                      the conditions, we will organise flights for this instead)
                    </li>
                    <li>Airport Pick-up and Drop-off</li>
                  </ul>
                </div>
                <div className="tab1__details--modifier">
                  <h2>What's exluded ?</h2>
                  <ul>
                    <li>
                      Airport Pick-up and Drop-off Bus transportation (Tourist
                      Coach) to Pokhara and return from Pokhara (Depending on
                      the conditions, we will organise flights for this instead)
                    </li>
                    <li>Airport Pick-up and Drop-off</li>
                    <li>Airport Pick-up and Drop-off</li>
                    <li>Airport Pick-up and Drop-off</li>
                    <li>Airport Pick-up and Drop-off</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`tab2 ${tabName === 2 ? "d-block" : "d-none"}`}>
            <h1>Itinerary</h1>
            <div className="tab2__acc">
              {accordionData.map((data, i) => (
                <AccordioncardComponent details={data} key={i} />
              ))}
            </div>
          </div>
          <div className={`tab3 ${tabName === 3 ? "d-block" : "d-none"}`}>
            <h1>Extras</h1>
            <div className="tab3__info">
              <div className="tab3__info--imge">
                <img
                  src="https://docs.google.com/uc?export=download&id=1YBHz72VKXRNUPge-h8pQvuVotim7LUq5"
                  alt="Image"
                  width="100%"
                />
              </div>
              <div className="tab3__des">
                <div className="tab3__des--title">
                  <h2>Chitwan Extension - Jungle Safari</h2> <span>£ 695</span>
                </div>
                <div className="tab3__des--para">
                  <p>
                    Chitwan National Park. Once your trek is finished, why not
                    relax and explore a rarely visited part of Nepal on our 3
                    Night tour of Chitwan national park.
                  </p>
                  <p>
                    Chitwan National Park. Once your trek is finished, why not
                    relax and explore a rarely visited part of Nepal on our 3
                    Night tour of Chitwan national park.
                  </p>
                  <ul>
                    <li>A unique trip designed by EverTrek.</li>
                    <li>
                      See animals in their natural environment like Tigers,
                      Rhinos and Crocodiles
                    </li>
                    <li>You stay in a comfortable lodge & Hotel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`tab4 ${tabName === 4 ? "d-block" : "d-none"}`}>
            <h1>More Infos</h1>
            <div className="tab4__acc">
              {infodata.map((data, i) => (
                <AccordioncardComponent details={data} key={i} />
              ))}
            </div>
          </div>
          <div className={`tab5 ${tabName === 5 ? "d-block" : "d-none"}`}>
            <h1>Dates & Prices</h1>
            <div className="tab5-detail">
              <div className="tab5-booking">
                {priceDetails.map((data, i) => (
                  <PricecardComponent details={data} key={i} />
                ))}
              </div>
              <div className="tab5-book">
                <BookcardComponent />
                <BookcardComponent />
                <BookcardComponent />
                <BookcardComponent />
                <BookcardComponent />
                <BookcardComponent />
              </div>
            </div>
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
                <span>
                  <FontAwesomeIcon icon={faPhone} /> 9803045098
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CardPreviewPage;
