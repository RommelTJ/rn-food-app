import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";
import useYelpBusinesses from "../hooks/useYelpBusinesses";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] =  useState("");
  const [searchAPI, yelpResults, errorMessage] = useYelpBusinesses();

  const filterResultsByPrice = (price) => yelpResults.filter(result => result.price === price);

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
      <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
      <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
      <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
