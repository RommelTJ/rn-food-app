import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const ResultsDetail = (props) => {
  const { result } = props;
  return (
    <View>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{ result.name }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    borderRadius: 4,
    height: 120
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14
  }
});

export default ResultsDetail;
