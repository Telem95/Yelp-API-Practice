import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { StyleService, useStyleSheet, Icon } from "@ui-kitten/components";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  const styles = useStyleSheet(themedStyle);

  return (
    <View style={styles.container}>
      <Icon style={styles.icon} fill="#091C7A" name="search-outline" />
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

const themedStyle = StyleService.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: "white",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
  },
  searchInput: {
    flex: 1,
    fontSize: 20,
    fontWeight: "300",
  },
  icon: {
    width: 32,
    height: 32,
    alignSelf: "center",
    marginHorizontal: 8,
    marginTop: 8,
  },
});

export default SearchBar;
