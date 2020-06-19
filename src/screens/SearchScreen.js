import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] =  useState("");
  const [yelpResults, setYelpResults] = useState([]);
  
  const onSearchTermChange = (text) => {
    setSearchTerm(text);
  };

  const onSearchTermSubmit = () => {
    console.log("Submit!");
  }

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={onSearchTermChange}
        onSearchTermSubmit={onSearchTermSubmit}
      />
      <Text>Search Screen</Text>
      <Text>We have found {yelpResults.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
