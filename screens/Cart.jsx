import React from "react";
import Header from "../components/Header";
import Heading from "../components/Heading";
import CartItem from "../components/CartItem";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { colors, defaultStyle } from "../styles/styles";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const cartItems = [
  {
    name: "ReactJs",
    product: "0768665asdasd63423",
    image:
      "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
    stock: 3,
    price: 40000,
    quantity: 2,
  },
  {
    name: "NestJs",
    product: "823647325asdxzczxc",
    image:
      "https://static-00.iconduck.com/assets.00/nestjs-icon-2048x2040-3rrvcej8.png",
    stock: 2,
    price: 20000,
    quantity: 1,
  },
];

const Cart = () => {
  const navigate = useNavigation();

  const incrementHandler = (id, name, price, image, stock, quantity) => {
    const newQty = quantity + 1;
    if (stock <= quantity)
      return Toast.show({
        type: "error",
        text1: "Maximum value added",
      });
    // dispatch({
    //   type: "addToCart",
    //   payload: {
    //     product: id,
    //     name,
    //     price,
    //     image,
    //     stock,
    //     quantity: newQty,
    //   },
    // });
  };

  const decrementHandler = (id, name, price, image, stock, quantity) => {
    const newQty = quantity - 1;

    if (1 >= quantity) return dispatch({ type: "removeFromCart", payload: id });

    // dispatch({
    //   type: "addToCart",
    //   payload: {
    //     product: id,
    //     name,
    //     price,
    //     image,
    //     stock,
    //     quantity: newQty,
    //   },
    // });
  };
  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      {/* Header */}
      <Header back={true} emptyCart={true} />

      {/* Heading */}
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />

      {/* Cart Items */}
      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.length > 0 ? (
            cartItems.map((i, index) => (
              <CartItem
                navigate={navigate}
                key={i.product}
                id={i.product}
                name={i.name}
                stock={i.stock}
                amount={i.price}
                imgSrc={i.image}
                index={index}
                qty={i.quantity}
                incrementhandler={incrementHandler}
                decrementHandler={decrementHandler}
              />
            ))
          ) : (
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              No Items Yet
            </Text>
          )}
        </ScrollView>
      </View>

      {/* Cart Items Length */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        {/* <Text>{cartItems.length} Items</Text>
        <Text>
          ₹
          {cartItems.reduce(
            (prev, curr) => prev + curr.quantity * curr.price,
            0
          )}
        </Text> */}
        <Text>5 Items</Text>
        <Text>Rp5000</Text>
      </View>

      {/* Checkout button */}
      <TouchableOpacity
      onPress={
        cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
      }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
