import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
const { width, height } = Dimensions.get("window");


export default function DishCard({ name, from, cat1, cat2, cat3 }) {
    return (
        <View >
            <Image style={{ width: 250, height: 330, objectFit: "contain" }} source={require("../../assets/images/dish.png")} />
            <Image style={{ position: "absolute", left: 30, top: 10, width: 40, height: 40, objectFit: "contain" }} source={require("../../assets/icons/save.png")} />
            <Image style={{ position: "absolute", right: 30, top: 10, width: 40, height: 40 }} source={require("../../assets/icons/fav.png")} />
            <LinearGradient
                colors={['rgba(0, 0, 0, 0)', '#000000']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ position: 'absolute', bottom: 0, left: 8, width: 236, height: "50%", justifyContent: 'flex-end', borderRadius: 25, gap: 10 }}
            >
                <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 20, fontFamily: "Urbanist-SemiBold", color: "#FFFFFF", textAlign: 'left', marginLeft: 10 }}>{name}</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 20, fontFamily: "Urbanist-SemiBold", color: "#FFFFFF", textAlign: 'left', marginLeft: 10 }}>{from}</Text>
                <View ellipsizeMode="tail" style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, width: width / 4.5 }}>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 14, fontFamily: "Urbanist-SemiBold", color: "#FFFFFF", textAlign: 'left', marginLeft: 10 }}>{cat1}</Text>
                    <View style={{ backgroundColor: '#FFFFFF', width: 1, height: '80%', marginLeft: 5 }} />
                    <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 14, fontFamily: "Urbanist-SemiBold", color: "#FFFFFF", textAlign: 'left', marginLeft: 10 }}>{cat2}</Text>
                    <View style={{ backgroundColor: '#FFFFFF', width: 1, height: '80%', marginLeft: 8 }} />
                    <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 14, fontFamily: "Urbanist-SemiBold", color: "#FFFFFF", textAlign: 'left', marginLeft: 10 }}>{cat3}</Text>
                </View>
            </LinearGradient>
        </View>
    )
}