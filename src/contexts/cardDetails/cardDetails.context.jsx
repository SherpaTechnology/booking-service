/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { cardDetail } from "../../utils/cardsDetails/cardDetails";

export const CardDetailsContext = createContext({
  cardDetails: [],
  setCardDetails: () => {},
});

export const CardDetailsProvider = ({ children }) => {
  const [cardDetails, setCardDetails] = useState(cardDetail);

  const value = { cardDetails };
  return (
    <CardDetailsContext.Provider value={value}>
      {children}
    </CardDetailsContext.Provider>
  );
};
