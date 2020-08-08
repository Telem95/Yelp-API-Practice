import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.searchIcon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.searchInput}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: "#eaeaea",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
  },
  searchInput: {
    flex: 1,
    fontSize: 20,
    fontWeight: "300",
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 8,
  },
});

export default SearchBar;
