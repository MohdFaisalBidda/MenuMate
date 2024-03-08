import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
const { width, height } = Dimensions.get("window");


export default function DishCard({ name, from, cat1, cat2, cat3, containerStyle, imageStyles, gradiendStyles }) {
    return (
        <View style={{ ...containerStyle,position:"relative" }}>
            <Image style={[styles.dishImage, imageStyles]} source={require("../../assets/images/dish.png")} />
            <Image style={{ position: "absolute", left: 15, top: 15, objectFit: "contain",width:33,height:33,objectFit:"contain"  }} source={require("../../assets/icons/save.png")} />
            <Image style={{ position: "absolute", right: 15, top: 15,width:33,height:33,objectFit:"cover" }} source={require("../../assets/icons/fav.png")} />
            <LinearGradient
                colors={['rgba(0, 0, 0, 0)', '#000000']}
                start={{ x: 0, y: 0 }}
                
                end={{ x: 0, y: 1 }}
                style={[{ position: 'absolute', bottom: 0, left: 0, width: width / 1.91, height: "50%", justifyContent: 'flex-end', borderRadius: 25, gap: 10 }, gradiendStyles]}
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

const styles = StyleSheet.create({
    dishImage: {
        width: width / 1.91, height: 300, objectFit: "contain"
    }
})