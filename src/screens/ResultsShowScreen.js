import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import useYelpBusiness from "../hooks/useYelpBusiness";

const ResultsShowScreen = (props) => {
  const { navigation } = props;
  const id = navigation.getParam("id");

  const [yelpResult, errorMessage] = useYelpBusiness(id);

  if (!yelpResult || errorMessage) return <View><Text>{errorMessage}</Text></View>;
  return (
    <View>
      <Text>{yelpResult.name}</Text>
      <FlatList
        data={yelpResult.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;
