import { useEffect, useState } from 'react';
import yelp from "../api/yelp";

export default (id) => {
  const [yelpResult, setYelpResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => { getBusiness(id).then() }, []);

  const getBusiness = async(id) => {
    try {
      const response = await yelp.get(`/${id}`);
      const business = response.data;
      setYelpResult(business);
      setErrorMessage("");
    } catch (e) {
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return [yelpResult, errorMessage];
};
