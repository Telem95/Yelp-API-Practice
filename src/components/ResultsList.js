import React from "react";
import { View, TouchableOpacity } from "react-native";
import {
  Text,
  StyleService,
  List,
  useStyleSheet,
  Layout,
} from "@ui-kitten/components";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {
  const styles = useStyleSheet(themedStyle);

  return !results.length ? null : (
    <Layout style={styles.container} level="3">
      <Text category="h5" style={styles.title}>
        {title}
      </Text>
      <List
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </Layout>
  );
};

const themedStyle = StyleService.create({
  container: {
    flex: 1,
  },
  list: {
    backgroundColor: "none",
  },
  title: {
    fontWeight: "700",
    marginHorizontal: 15,
  },
});

export default withNavigation(ResultsList);
