import React, { useState, useEffect } from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  ListRenderItemInfo,
  ScrollView,
  View,
} from "react-native";
import {
  Button,
  Card,
  Icon,
  List,
  StyleService,
  Text,
  useStyleSheet,
  TopNavigation,
  TopNavigationAction,
  Divider,
} from "@ui-kitten/components";
import { ImageOverlay } from "../extra/image-overlay.component";
import yelp from "../api/yelp";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const ResultScreen = ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const renderImageItem = ({ item }) => (
    <Image style={styles.imageItem} source={{ uri: item }} />
  );

  const renderOptionItem = (option: string, index: number) => (
    <Button
      key={index}
      style={styles.optionItem}
      appearance="ghost"
      size="small"
    >
      {option}
    </Button>
  );

  const renderCategoryItem = ({ title }, index) => (
    <Button
      key={index}
      style={styles.detailItem}
      appearance="outline"
      size="tiny"
    >
      {title}
    </Button>
  );

  const renderBookingFooter = () => (
    <View style={{ margin: 16 }}>
      <Text category="s1">Categories</Text>
      <View style={styles.detailsList}>
        {result.categories.map(renderCategoryItem)}
      </View>
    </View>
  );

  return (
    <>
      <TopNavigation
        title={result ? result.name : ""}
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <ScrollView style={styles.container}>
        <ImageOverlay style={styles.image} source={{ uri: result.image_url }} />
        <Card
          style={styles.bookingCard}
          appearance="filled"
          disabled={true}
          footer={renderBookingFooter}
        >
          <Text style={styles.title} category="h6">
            {result.name}
          </Text>
          <Text style={styles.locationLabel} appearance="hint" category="p2">
            Location
          </Text>
          <Text style={styles.addressLabel}>{result.location.address1}</Text>
          <Text>{result.location.city}</Text>
          <Button style={styles.callButton} status="success">
            CALL NOW
          </Button>
        </Card>
        <Text style={styles.sectionLabel} category="s1">
          Photos
        </Text>
        <List
          contentContainerStyle={styles.imagesList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={result.photos}
          renderItem={renderImageItem}
        />
      </ScrollView>
    </>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-3",
  },
  image: {
    height: 300,
  },
  bookingCard: {
    marginTop: -80,
    margin: 16,
  },
  title: {
    width: "65%",
  },
  locationLabel: {
    marginTop: 24,
  },
  addressLabel: {
    fontSize: 17,
    fontWeight: "600",
    marginTop: 8,
  },
  callButton: {
    position: "absolute",
    bottom: 24,
    right: 24,
  },
  detailsList: {
    flexDirection: "row",
    marginHorizontal: -4,
    marginVertical: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    borderRadius: 16,
  },
  optionList: {
    flexDirection: "row",
    marginHorizontal: -4,
    marginVertical: 8,
  },
  optionItem: {
    marginHorizontal: 4,
    paddingHorizontal: 0,
  },
  sectionLabel: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  imagesList: {
    padding: 8,
    backgroundColor: "background-basic-color-3",
  },
  imageItem: {
    width: 180,
    height: 120,
    borderRadius: 8,
    marginHorizontal: 8,
  },
});

export default ResultScreen;
