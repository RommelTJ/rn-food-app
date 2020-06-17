import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ENV from "./env";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Yelp Client ID: {ENV().yelpClientID}</Text>
      <Text>Yelp API Key: {ENV().yelpAPIKey}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
