import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";
import useYelpBusinesses from "../hooks/useYelpBusinesses";
import ResultsList from "../components/ResultsList";

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
      <ResultsList title="Cost Effective" />
      <ResultsList title="Bit Pricier" />
      <ResultsList title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
