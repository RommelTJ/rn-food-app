import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] =  useState("");

  const onSearchTermChange = (text) => {
    setSearchTerm(text);
  };

  return (
    <View>
      <SearchBar searchTerm={searchTerm} onSearchTermChange={onSearchTermChange} />
      <Text>Search Term: {searchTerm}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
