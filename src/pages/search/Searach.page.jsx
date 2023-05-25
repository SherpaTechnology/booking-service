import Layout from "../../common/layout/Layout";
import SearchBannerComponent from "../../components/searchBanner/SearchBanner.component";
const SearachPage = () => {
  return (
    <Layout>
      <div className="search-banner">
        <SearchBannerComponent />
      </div>
      <div className="search-main">
        <div className="wrapper">I am search</div>
      </div>
    </Layout>
  );
};

export default SearachPage;
