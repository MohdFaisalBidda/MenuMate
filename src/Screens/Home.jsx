import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SCREENS } from '../constants/screens';
import LinearGradient from 'react-native-linear-gradient';
import DishCard from '../Components/DishCard';
const { width, height } = Dimensions.get("window");
import { cooking, dishes } from "../constants/data"
import FilterModal from '../Components/FilterModal';

export default function Home({ navigation }) {
    const [selectedTab, setSelectedTab] = useState('Restaurants');
    const [filter, setFilter] = useState("");
    const [data, setData] = useState(dishes);
    const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

    const handleFilterChange = (text) => {
        setFilter(text);
        if (selectedTab === "Restaurants") {
            const filterData = dishes.filter((item) =>
                item.dishName.toLowerCase().includes(text.toLowerCase())
                ||
                item.dishFrom.toLowerCase().includes(text.toLowerCase())
                ||
                item.dishCategories.some(cat => cat.toLowerCase().includes(text.toLowerCase()))
            )
            setData(filterData)
        } else {
            const filterData = cooking.filter((item) =>
                item.dishName.toLowerCase().includes(text.toLowerCase())
                ||
                item.dishFrom.toLowerCase().includes(text.toLowerCase())
                ||
                item.dishCategories.some(cat => cat.toLowerCase().includes(text.toLowerCase()))
            )
            setData(filterData)
        }

    }

    const handleFilterPress = () => {
        setIsFilterModalVisible(true);
    };

    const handleFilterModalClose = () => {
        setIsFilterModalVisible(false);
    };

    const handleApplyFilter = (selectedFilters) => {
        console.log(selectedFilters);

        if (selectedFilters.length === 0) {
            setData(dishes);
        } else {
            const filteredData = dishes.filter((item) => {
                return (
                    selectedFilters.some((filter) =>
                        item.dishName.toLowerCase().includes(filter.toLowerCase())
                    ) ||
                    selectedFilters.some((filter) =>
                        item.dishCategories.includes(filter)
                    )
                );
            });

            setData(filteredData);
        }
    };

    return (
        <View style={{ backgroundColor: "rgba(250, 249, 246, 1)", padding: 20, height, fontFamily: "" }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Good Morning</Text>
                <Text style={styles.headerText}>Mr.Joe!</Text>
            </View>
            <View style={styles.inputContainer}>
                <Image style={styles.searchIcon} source={require("../../assets/icons/search-normal.png")} />
                <TextInput placeholderTextColor="#B5B5B5" placeholder='Search' style={styles.input} onChangeText={handleFilterChange} value={filter} />
                <TouchableOpacity style={styles.filterIcon} onPress={handleFilterPress}>
                    <Image source={require("../../assets/icons/filter.png")} />
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }}>
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedTab('Restaurants');
                            setData(dishes)
                        }}
                        style={[styles.restaurantTab, { borderBottomColor: selectedTab === 'Restaurants' ? 'rgba(18, 44, 62, 1)' : "rgba(217, 217, 217, 1)", }]}>
                        <Text style={styles.restaurantText}>Restaurants</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedTab('Cooking');
                            setData(cooking)
                        }}
                        style={[styles.cookingTab, { borderBottomColor: selectedTab === 'Cooking' ? 'rgba(18, 44, 62, 1)' : "rgba(217, 217, 217, 1)", }]}>
                        <Text style={styles.cookingText}>Cooking</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ padding: 15, paddingRight: 0, elevation: 0.5, backgroundColor: '#FFFFFF', borderRadius: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <View>
                        <Text style={{ fontSize: 20, fontFamily: "Urbanist-SemiBold", color: "#122C3E" }}>Satisfy your cravings</Text>
                        <Text style={{ fontSize: 13, marginTop: 5, fontFamily: "Urbanist-Medium", color: "#122C3E" }}>Restaurants that suits to your palate</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.ALLMEALS)}>
                            <Text style={{ fontSize: 16, fontFamily: "Urbanist-SemiBold", color: "#122C3E" }}>View All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView horizontal style={{ marginVertical: 20 }}>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        {data?.map((item) => (
                            <DishCard name={item.dishName} from={item.dishFrom} cat1={item.dishCategories[0]} cat2={item.dishCategories[1]} cat3={item.dishCategories[2]} />
                        ))}
                    </View>
                </ScrollView>
            </View>
            <FilterModal
                visible={isFilterModalVisible}
                onClose={handleFilterModalClose}
                onApplyFilter={handleApplyFilter}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 25
    },
    headerText: {
        fontSize: 16,
        color: "#272B33",
        fontWeight: "600",
        fontFamily: "Urbanist-SemiBold"
    },
    inputContainer: {
        position: "relative"
    },
    input: {
        width: width / 1.1,
        borderWidth: 1,
        borderColor: "rgba(181, 181, 181, 1)",
        backgroundColor: "white",
        borderRadius: 15,
        paddingHorizontal: 45,
        elevation: 2,
        fontSize: 16,
        fontWeight: "400",
        fontFamily: "Urbanist-Regular"

    },
    searchIcon: {
        position: "absolute",
        left: 15,
        top: 16,
        zIndex: 2,
        height: 20
    },
    filterIcon: {
        position: "absolute",
        right: 10,
        top: 16,
        zIndex: 2,
        height: 20
    },
    restaurantTab: {
        flex: 1,
        alignItems: 'center',
        borderBottomWidth: 4,
        paddingVertical: 10,
        fontFamily: "Urbanist-Regular"
    },
    restaurantText: {
        fontSize: 22,
        color: "#272B33",
        fontFamily: "Urbanist-SemiBold"
    },
    cookingTab: {
        flex: 1,
        alignItems: 'flex-end',
        borderBottomWidth: 4,
        paddingVertical: 10,
        fontFamily: "Urbanist-Regular"
    },
    cookingText: { fontSize: 22, fontFamily: "Urbanist-SemiBold", color: "#272B33", marginRight: 20 }
});
