import React, { useState } from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet, Dimensions, } from 'react-native';
const { width, height } = Dimensions.get("window");


const FilterModal = ({ visible, onClose, onApplyFilter }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (filter) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((selectedFilter) => selectedFilter !== filter)
      : [...selectedFilters, filter];

    setSelectedFilters(updatedFilters);
  };

  const handleApplyFilter = () => {
    onApplyFilter(selectedFilters);
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{ padding: 20, marginTop: 20 }}>
            <Text style={styles.modalTitle}>Filters</Text>
          </View>
          <View style={{ borderBottomWidth: 1, borderColor: "#F0F0F0" }} />
          <View style={{ padding: 20, marginTop: 20, flex: 1, gap: 30 }}>
            <View>
              <Text style={styles.filterTitle}>Diet</Text>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity style={[selectedFilters.includes('Veg') && styles.selectedFilterOption]} onPress={() => handleFilterChange('Veg')}>
                  <Text style={[styles.filterOption, [selectedFilters.includes('Veg') && styles.selectedFilterText]]}>Veg</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[selectedFilters.includes('Non-Veg') && styles.selectedFilterOption]} onPress={() => handleFilterChange('Non-Veg')}>
                  <Text style={[styles.filterOption, [selectedFilters.includes('Non-Veg') && styles.selectedFilterText]]}>Non-Veg</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[selectedFilters.includes('Non-Veg') && styles.selectedFilterOption]} onPress={() => handleFilterChange('Non-Veg')}>
                  <Text style={[styles.filterOption, [selectedFilters.includes('Non-Veg') && styles.selectedFilterText]]}>Non-Veg</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.filterTitle}>Cuisines</Text>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity style={[selectedFilters.includes('North Indian') && styles.selectedFilterOption]} onPress={() => handleFilterChange('North Indian')}>
                  <Text style={[styles.filterOption, [selectedFilters.includes('North Indian') && styles.selectedFilterText]]}>North Indian</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[selectedFilters.includes('Hyderabadi') && styles.selectedFilterOption]} onPress={() => handleFilterChange('Hyderabadi')}>
                  <Text style={[styles.filterOption, [selectedFilters.includes('Hyderabadi') && styles.selectedFilterText]]}>Hyderabadi</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ padding: 20, marginTop: 20, flex: 1, gap: 10 }}>
            <Text style={styles.filterTitle}>Protiens</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity style={[selectedFilters.includes('Butter Chicken') && styles.selectedFilterOption]} onPress={() => handleFilterChange('Butter Chicken')}>
                <Text style={[styles.filterOption, [selectedFilters.includes('Butter Chicken') && styles.selectedFilterText]]}>Chicken</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[selectedFilters.includes('Fish Curry') && styles.selectedFilterOption]} onPress={() => handleFilterChange('Fish Curry')}>
                <Text style={[styles.filterOption, [selectedFilters.includes('Fish Curry') && styles.selectedFilterText]]}>Fish</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ borderTopWidth: 1, borderColor: "gray" }} />
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 30, padding: 20 }}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleApplyFilter} style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    width,
    height,
    justifyContent: "space-between"
  },
  modalTitle: {
    fontSize: 28,
    color: "#272B33",
    fontWeight: "600",
    marginBottom: 10,
    fontFamily: "Urbanist-SemiBold",
  },
  filterTitle: {
    fontSize: 20,
    color: "#272B33",
    fontWeight: "600",
    marginBottom: 10,
    fontFamily: "Urbanist-SemiBold",
  },
  filterOption: {
    borderWidth: 2,
    borderColor: "#122C3E",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    fontFamily: "Urbanist-Medium",
    color: "#122C3E",
    fontSize: 16,
  },
  selectedFilterOption: {
    backgroundColor: "#122C3E",
    borderRadius: 20,
  },
  selectedFilterText: {
    color: "white"
  },
  applyButton: {
    backgroundColor: '#122C3E',
    padding: 15,
    width: width / 1.7,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  applyButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: "Urbanist-SemiBold",
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#333',
    fontSize: 20,
    fontFamily: "Urbanist-SemiBold",
  },
});

export default FilterModal;
