/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Layout from "../../common/layout/Layout";
import SearchBannerComponent from "../../components/searchBanner/SearchBanner.component";
import InputComponent from "../../components/input/Input.component";
import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/Button.component";
import CheckboxInputComponent from "../../components/checkboxInput/CheckboxInput.component";
import SearchCardComponent from "../../components/searchCard/SearchCard.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPhone,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

const defaultValues = {
  searchText: "",
  time: "",
  location: "",
};
const SearachPage = () => {
  const [searchForms, setSearchForms] = useState(defaultValues);
  const { searchText, time } = searchForms;
  const handleChange = e => {
    const { name, value } = e.target;
    setSearchForms({ ...searchForms, [name]: value });
  };
  const submitForm = () => {
    console.log("Submit", searchForms);
  };
  return (
    <Layout>
      <div className="search-banner">
        <SearchBannerComponent />
      </div>
      <div className="search-main">
        <div className="wrapper">
          <div className="search">
            <div className="search__right">
              <div className="search-input">
                <div className="search-title">Filter by keyword</div>
                <div className="search-input__search">
                  <InputComponent
                    type="text"
                    value={searchText}
                    name="searchText"
                    placeholder="search..."
                    onChange={e => handleChange(e)}
                  />
                  <div className="search-input__search--icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
                </div>
              </div>
              <div className="search-inputs__right">
                <div className="search-inputs__right--tile">Date</div>
                <InputComponent
                  type="date"
                  value={time}
                  name="time"
                  onChange={e => handleChange(e)}
                />
              </div>
              <div className="search-button">
                <ButtonComponent
                  buttonType={BUTTON_TYPE_CLASSES.normal}
                  onClick={submitForm}
                >
                  Search Tour
                </ButtonComponent>
              </div>
              <hr />
              <div className="country">
                <h3 className="country-title">Country</h3>
                <div className="country-section">
                  <CheckboxInputComponent
                    name="location"
                    value={location}
                    type="checkbox"
                    label="Nepal"
                  />
                  <CheckboxInputComponent type="checkbox" label="India" />
                  <CheckboxInputComponent type="checkbox" label="Japan" />
                  <CheckboxInputComponent type="checkbox" label="Canada" />
                  <CheckboxInputComponent type="checkbox" label="Austrilia" />
                </div>
              </div>
              <div className="country">
                <h3 className="country-title">Altitude Range</h3>
                <div className="country-section">
                  <CheckboxInputComponent
                    type="checkbox"
                    label="4000 - 6000m"
                  />
                  <CheckboxInputComponent type="checkbox" label="6000 + (7)" />
                  <CheckboxInputComponent
                    type="checkbox"
                    label="100 - 1500m (2)"
                  />
                  <CheckboxInputComponent
                    type="checkbox"
                    label="1500 - 300m(1)"
                  />
                </div>
              </div>
              <div className="country">
                <h3 className="country-title">Prices</h3>
                <div className="country-section">
                  <CheckboxInputComponent type="checkbox" label="$0 to $449" />
                  <CheckboxInputComponent
                    type="checkbox"
                    label="$500 to $999"
                  />
                  <CheckboxInputComponent
                    type="checkbox"
                    label="$100 to $1500"
                  />
                  <CheckboxInputComponent type="checkbox" label="3000(+)" />
                </div>
              </div>
            </div>
            <div className="search__left">
              <SearchCardComponent />
              <SearchCardComponent />
              <SearchCardComponent />
              <SearchCardComponent />
              <SearchCardComponent />
              <SearchCardComponent />
              <div className="search__left--pagination">
                <div className="search__left--icon">
                  <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <div className="search__left--icon">
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
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

export default SearachPage;
