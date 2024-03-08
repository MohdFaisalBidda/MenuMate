import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DishCard from '../Components/DishCard'
const { width, height } = Dimensions.get("window");
import {dishes} from "../constants/data"


export default function AllMeals({ navigation }) {
  const renderDishCard = ({ item }) => (
    <DishCard
      name={item.dishName}
      from={item.dishFrom}
      cat1={item.dishCategories[0]}
      cat2={item.dishCategories[1]}
      cat3={item.dishCategories[2]}
      containerStyle={{ flexDirection: "row", marginHorizontal: 8, marginVertical: 15, borderRadius: 20 }}
      imageStyles={{ width: width / 2.3, height: height / 2.5, objectFit: "fill", borderRadius: 20 }}
      gradiendStyles={{ width: width / 2.3 }}
    />
  );

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={{ marginTop: 5, objectFit: "fill", objectFit: "contain" }} source={require("../../assets/icons/back.png")} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Satisfy your Cravings</Text>
      </View>
      <View style={{ alignItems: "center", height, paddingBottom: 100 }}>
        <FlatList
          data={dishes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderDishCard}
          numColumns={2}
          contentContainerStyle={{ paddingVertical: 10 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  headerText: {
    fontSize: 18,
    color: "#272B33",
    fontWeight: "600",
    fontFamily: "Urbanist-SemiBold"
  },
})