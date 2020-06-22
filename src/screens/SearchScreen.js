import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import useYelpBusinesses from "../hooks/useYelpBusinesses";
import ResultsList from "../components/ResultsList";

const SearchScreen = (props) => {
  const { navigation } = props;
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
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={onSearchTermChange}
        onSearchTermSubmit={() => onSearchTermSubmit(searchTerm)}
      />
      { errorMessage ? <Text>{errorMessage}</Text> : undefined }
      <ScrollView>
        <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} navigation={navigation} />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} navigation={navigation} />
        <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} navigation={navigation} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
