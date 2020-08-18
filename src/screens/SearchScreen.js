import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import {
  TopNavigation,
  Divider,
  Layout,
  StyleService,
  useStyleSheet,
  Text,
} from "@ui-kitten/components";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <Layout level="3" style={styles.container}>
      <TopNavigation title="Yelp Search" alignment="center" />
      <Divider />
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleService.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;
