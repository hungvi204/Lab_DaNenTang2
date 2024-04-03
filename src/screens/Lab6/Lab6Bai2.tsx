import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import {
  useGetPokemonByNameQuery,
  useLazyGetPokemonByNameQuery,
} from "./pokemon";

const Lab6Bai2 = () => {
  const [pokemonName, setPokemonName] = useState("");
  const { data, isLoading } = useGetPokemonByNameQuery(pokemonName);
  const [getPokemonByName, { data: lazyData, isFetching }] = useLazyGetPokemonByNameQuery();

  const handleSearch = () => {
    getPokemonByName(pokemonName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thông tin pokemon ivysaur</Text>
      <TextInput
        placeholder=""
        style={styles.input}
        onChangeText={(text) => setPokemonName(text)}
      />
      <Button title="Tìm kiếm pokemon" onPress={handleSearch} />
      <View>
        {isLoading || isFetching ? (
          <Text>Loading...</Text>
        ) : data ? (
          <Text>{JSON.stringify(data)}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  text: {
    color: "red",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    margin: 20,
  },
  view: {
    width: "50%",
    backgroundColor: "yellow",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default Lab6Bai2;
