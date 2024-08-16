// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View,Button,TextInput } from "react-native";

export default function App() {
  const [person,Setperson]=useState({name:"Name",age:"Age"});

  
  return (
    <>
      <View style={styles.container}>
          <Text>Enter Name:</Text>
          <TextInput
          placeholder="Enter Name"
          onChangeText={(value) => Setperson({ ...person, name: value })}
          />
          <Text>Enter Age:</Text>
          <TextInput
          placeholder="Enter Name"
          onChangeText={(value) => Setperson({ ...person, age: value })}
          />
          <Text>Name:{person.name} Age:{person.age}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    textAlign: "center",
    color: "blue",
  },
  header: {
    backgroundColor: "red",
    padding: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  body: {
    backgroundColor: "blue",
    padding: 20,
  },
});
