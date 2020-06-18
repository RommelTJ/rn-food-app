import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] =  useState("");

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
      <Text>Search Term: {searchTerm}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
