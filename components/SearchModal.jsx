import {
  View,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import { colors } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { Headline, Searchbar } from "react-native-paper";

const SearchModal = ({
  searchQuery,
  setSearchQuery,
  setActiveSearch,
  products,
}) => {
  const navigate = useNavigation();

  // ? when user click the back button
  const backAction = () => {
    // ? set the search value to empty
    setSearchQuery("");
    // ? remove the search bar
    setActiveSearch(false);
    return true;
  };

  // ? when pressing the back button
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        zIndex: 100,
        backgroundColor: colors.color2,
        padding: 35,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        {/* Search Input */}
        <Searchbar
          placeholder="Search..ppp."
          onChangeText={(e) => setSearchQuery(e)}
          value={searchQuery}
          style={{
            marginTop: 20,
          }}
        />

        {/* Showing the searched product */}
        <ScrollView>
        <View
            style={{
              paddingVertical: 40,
              paddingHorizontal: 10,
            }}
          >
            {products.map((i) => (
              <SearchItem
                key={i._id}
                imgSrc={i.images[0]?.url}
                name={i.name}
                price={i.price}
                handler={() =>
                  navigate.navigate("productdetails", { id: i._id })
                }
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const SearchItem = ({ price, name, imgSrc, handler }) => (
    <TouchableOpacity onPress={handler}>
      <View
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: colors.color2,
          elevation: 5,
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "row",
          marginVertical: 30,
        }}
      >
        <Image
          source={{ uri: imgSrc }}
          style={{
            width: 80,
            height: 80,
            position: "absolute",
            resizeMode: "contain",
            top: -15,
            left: 10,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
        <View
          style={{
            width: "80%",
            paddingHorizontal: 30,
          }}
        >
          <Text numberOfLines={1}>{name}</Text>
          <Headline
            style={{
              fontWeight: "900",
            }}
          >
            Rp{price}
          </Headline>
        </View>
      </View>
    </TouchableOpacity>
  );

export default SearchModal;
