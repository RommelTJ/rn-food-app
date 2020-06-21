import { useEffect, useState } from 'react';
import yelp from "../api/yelp";

export default () => {
  const [yelpResults, setYelpResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => { searchAPI("tacos")}, []);

  const searchAPI = async(termParam) => {
    try {
      const searchParams = {term: termParam, location: "San Diego, CA", limit: 50};
      const response = await yelp.get("/search", {params: searchParams});
      const businesses = response.data.businesses;
      setYelpResults(businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };


  return [searchAPI, yelpResults, errorMessage];
};
