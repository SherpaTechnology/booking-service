import Layout from "../../common/layout/Layout";
import Banner2Component from "../../components/banner2/banner2.Component";
import DestinationCardComponent from "../../components/destinationcard/DestinationCard.component";

const destinations = [
  {
    id: 1,
    title: "Khotang Diktel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus",
    time: "3 days",
  },
  {
    id: 2,
    title: "Khotang Diktel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus",
    time: "6 days",
  },
  {
    id: 3,
    title: "Khotang Diktel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus",
    time: "3 days",
  },
  {
    id: 4,
    title: "Khotang Diktel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus",
    time: "4 days",
  },
  {
    id: 5,
    title: "Khotang Diktel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus",
    time: "5 days",
  },
  {
    id: 6,
    title: "Khotang Diktel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus",
    time: "5 days",
  },
];

const DestnationPpage = () => {
  return (
    <Layout>
      <div className="banner">
        <Banner2Component />
      </div>
      <div className="wrapper">
        <div className="desdata">
          {destinations.map(data => (
            <DestinationCardComponent key={data.id} details={data} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DestnationPpage;
