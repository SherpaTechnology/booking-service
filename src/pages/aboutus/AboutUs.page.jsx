/* eslint-disable react/no-unescaped-entities */
import Layout from "../../common/layout/Layout";
import Banner2Component from "../../components/banner2/banner2.Component";
import UsercardComponent from "../../components/usercard/usercard.component";
import ButtonComponent,{BUTTON_TYPE_CLASSES} from "../../components/button/Button.component"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const userDetails = [
  {
    id: 1,
    name: "Nabaraj Rai",
    position: "CEO,Founder",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ea! Aut accusantium porro quibusdam iste doloremque sint culpa. Tempore, vitae odit pariatur ullam perspiciatis nisi ut corporis accusamus officiis vel.    ",
  },
  {
    id: 2,
    name: "Kaka Rai",
    position: "CEO,Founder",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ea! Aut accusantium porro quibusdam iste doloremque sint culpa. Tempore, vitae odit pariatur ullam perspiciatis nisi ut corporis accusamus officiis vel.    ",
  },
  {
    id: 3,
    name: "Sherpa Rai",
    position: "CEO,Founder",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ea! Aut accusantium porro quibusdam iste doloremque sint culpa. Tempore, vitae odit pariatur ullam perspiciatis nisi ut corporis accusamus officiis vel.    ",
  },
  {
    id: 4,
    name: "Gautam Rai",
    position: "CEO,Founder",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ea! Aut accusantium porro quibusdam iste doloremque sint culpa. Tempore, vitae odit pariatur ullam perspiciatis nisi ut corporis accusamus officiis vel.    ",
  },
  {
    id: 5,
    name: "Nabaraj Rai",
    position: "CEO,Founder",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ea! Aut accusantium porro quibusdam iste doloremque sint culpa. Tempore, vitae odit pariatur ullam perspiciatis nisi ut corporis accusamus officiis vel.    ",
  },
];

const AboutUsPage = () => {
  return (
    <Layout>
      <div className="banner-section">
        <Banner2Component title="About  Us" description="Get know  about us" />
      </div>
      <div className="main-section">
        <div className="wrapper">
          <div className="description-section">
            <div className="description-section__content">
              <h1>About Us</h1>
              <p>
                Everest is more than a mountain and the journey to Everest Base
                Camp (5,364m/17,598ft) is more than just a trek. As you travel
                through Sherpa villages and take in the awe-inspiring views, you
                will want to come back again and again. The ultimate bucket
                listtrek for any active adventurer looking for their next
                bigchallenge....
              </p>
              <p>
                Everest is more than a mountain and the journey to Everest Base
                Camp (5,364m/17,598ft) is more than just a trek. As you travel
                through Sherpa villages and take in the awe-inspiring views, you
                will want to come back again and again. The ultimate bucket
                listtrek for any active adventurer looking for their next
                bigchallenge....
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sollicitudin, tellus vitae condimentum egestas, libero dolor
                auctor tellus, eu consectetur neque elit quis nunc. Cras
                elementum pretium est. Nullam ac justo efficitur, tristique
                ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et
                tellus nec, maximus viverra metus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="team-sections">
        <div className="wrapper">
          <div className="team-section">
            <h1>Meet our team</h1>
            <div className="team-section__main">
              {userDetails.map(data => (
                <UsercardComponent key={data.id} details={data} />
              ))}
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

export default AboutUsPage;
