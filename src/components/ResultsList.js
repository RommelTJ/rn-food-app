import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from "./ResultsDetail";

const ResultsList = (props) => {
  const {title, results} = props;

  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(r) => r.id}
        renderItem={({ item }) => <ResultsDetail result={item} />}
      />
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
