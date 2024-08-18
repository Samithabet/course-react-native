import  React from "react";
import {  Text, View } from "react-native";
 default export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}