import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.reviews}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 200,
    height: 125,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "600",
  },
  reviews: {
    fontWeight: "300",
  },
});

export default ResultsDetail;
