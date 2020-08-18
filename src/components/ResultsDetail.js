import React from "react";
import { Image, View } from "react-native";
import { Card, StyleService, Text, useStyleSheet } from "@ui-kitten/components";
import { navigate } from "../navigationRef";

const ResultsDetail = ({ result }) => {
  const styles = useStyleSheet(themedStyles);

  const renderCardHeader = () => (
    <View>
      <Image style={styles.image} source={{ uri: result.image_url }} />
    </View>
  );

  return (
    <Card
      style={styles.container}
      appearance="filled"
      header={renderCardHeader}
      onPress={() => navigate("Result", { id: result.id })}
    >
      <Text style={styles.name} numberOfLines={1}>
        {result.name}
      </Text>
      <Text style={styles.reviews}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </Card>
  );
};

const themedStyles = StyleService.create({
  container: {
    width: 200,
    margin: 15,
    borderRadius: 10,
  },
  image: {
    height: 125,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "600",
  },
  reviews: {
    fontSize: 12,
    fontWeight: "300",
  },
});

export default ResultsDetail;
