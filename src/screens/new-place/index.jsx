import { Button, ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import { LocationSelector } from "../../components";
import colors from "../../utils/colors";
import { savePlace } from "../../store/place.slice";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const NewPlace = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState(null);

  const onHandleChange = (text) => {
    setTitle(text);
  };

  const onHandleSubmit = () => {
    dispatch(savePlace(title, location));
    navigation.navigate("Places");
  };

  const onHandleLocationSelect = (location) => {
    setLocation(location);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Titulo</Text>
        <TextInput
          style={styles.input}
          placeholder="Nuevo ubicacion"
          onChangeText={onHandleChange}
          value={title}
        />
        <LocationSelector onLocation={onHandleLocationSelect} />
        <Button title="Grabar dirección" color={colors.primary} onPress={onHandleSubmit} />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
