import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";
import useYelpBusinesses from "../hooks/useYelpBusinesses";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] =  useState("");
  const [searchAPI, yelpResults, errorMessage] = useYelpBusinesses();

  const onSearchTermChange = (text) => {
    setSearchTerm(text);
  };

  const onSearchTermSubmit = (termParam) => {
    searchAPI(termParam);
  }

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={onSearchTermChange}
        onSearchTermSubmit={() => onSearchTermSubmit(searchTerm)}
      />
      { errorMessage ? <Text>{errorMessage}</Text> : undefined }
      <Text>We have found {yelpResults.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
