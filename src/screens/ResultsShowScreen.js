import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = (props) => {
  const { navigation } = props;

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => { getBusiness(id).then() }, []);

  const id = navigation.getParam("id");

  const getBusiness = async(id) => {
    try {
      const response = await yelp.get(`/${id}`);
      const business = response.data;
      setResult(business);
      setError("");
    } catch (e) {
      setError("Something went wrong. Please try again later.");
    }
  };


  if (!result) return null;
  return (
    <View>
      <Text>{result.name}: {(result.photos && result.photos.length) || 0}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
