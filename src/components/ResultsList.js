import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = (props) => {
  const {title} = props;

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsList;
