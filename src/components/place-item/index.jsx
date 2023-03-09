import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const PlaceItem = ({ id, title, onSelect, address }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;
