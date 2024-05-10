import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Button } from "react-native-paper";
import { colors, defaultStyle } from "../styles/styles";
import React, { useState } from "react";
import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const categories = [
  { category: "Shirt", _id: "jsad-123123-dsafdf" },
  { category: "Pants", _id: "ggas-46643-gjgjsd" },
  { category: "Jeans", _id: "dnbcvn-435346-utkgh" },
  { category: "Shoes", _id: "vbnvbn-546546-xvxcv" },
  { category: "Jacket", _id: "hsxzz-8568-asdfgjh" },
  { category: "Socks", _id: "idsf-55634-cxvtrt" },
  { category: "Glasses", _id: "xzcyki-7344-ouyadds" },
  { category: "Hat", _id: "ykjdwwer-63243-htku" },
  { category: "Gloves", _id: "qweqwre-5465-lyuksdf" },
];
const products = [
  {
    price: 400000,
    stock: 23,
    name: "Converse",
    _id: "0768665asdasd63423",
    images: [
      {
        url: "https://image.similarpng.com/thumbnail/2020/09/Converse-sneakers--Premium-vector-PNG.png",
      },
    ],
  },
  {
    price: 400000,
    stock: 23,
    name: "Macbook",
    _id: "0768655asdasd63423",
    images: [
      {
        url: "https://image.similarpng.com/thumbnail/2020/09/Converse-sneakers--Premium-vector-PNG.png",
      },
    ],
  },
];
const Home = () => {
  const navigate = useNavigation();

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCardHandler = (id) => {
    console.log("Add to Cart", id);
  }
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        {/* Cart Icon */}
        <Header />

        {/* Heading Row */}
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Heading */}
          <View>
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
          </View>

          {/* Search Bar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color={"gray"}
                style={{ backgroundColor: colors.color2, elevation: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
            }}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        {/* Products Card */}
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCardHandler={addToCardHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Footer */}
      <Footer activeRoute={"home"}/>
    </>
  );
};

export default Home;
