import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../styles/styles";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";
import OrderItem from "../components/OrderItem";
// import { useGetOrders } from "../utils/hooks";
import { useIsFocused } from "@react-navigation/native";

const orders = [
    {
        _id: "76782374asdasdsf",
        shippingInfo: {
            address: "0231 street",
            city: "Houston",
            country: "USA",
            pinCode: 784724
        },
        createdAt: "24-04-2024T1234",
        orderStatus: "Processing",
        paymentMethod: "COD",
        totalAmount: 40000
    },
    {
        _id: "76784444asdasdsf",
        shippingInfo: {
            address: "444 street",
            city: "Kansas",
            country: "USA",
            pinCode: 53123
        },
        createdAt: "24-04-2024T1234",
        orderStatus: "Completed",
        paymentMethod: "ONLINE",
        totalAmount: 50000
    }
]
const Orders = () => {
  //   const isFocused = useIsFocused();
  //   const { loading, orders } = useGetOrders(isFocused);
  const loading = false;

  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}
    >
      <Header back={true} />

      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Orders</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            padding: 10,
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderedOn={item.createdAt.split("T")[0]}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pinCode}`}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
