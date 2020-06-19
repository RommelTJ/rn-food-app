import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] =  useState("");
  const [yelpResults, setYelpResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = async() => {
    try {
      const searchParams = {term: searchTerm, location: "San Diego, CA", limit: 50};
      const response = await yelp.get("/search", {params: searchParams});
      const businesses = response.data.businesses;
      setYelpResults(businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  const onSearchTermChange = (text) => {
    setSearchTerm(text);
  };

  const onSearchTermSubmit = () => {
    searchAPI();
  }

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={onSearchTermChange}
        onSearchTermSubmit={onSearchTermSubmit}
      />
      { errorMessage ? <Text>{errorMessage}</Text> : undefined }
      <Text>We have found {yelpResults.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
