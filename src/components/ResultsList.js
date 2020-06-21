import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = (props) => {
  const {title, results} = props;

  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text>Results: {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultsList;
