import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultScreen from "./src/screens/ResultScreen";

const navigation = createStackNavigator(
  {
    Search: SearchScreen,
    Result: ResultScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Yelp Search",
    },
  }
);

export default createAppContainer(navigation);
