// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput,ScrollView,FlatList,TouchableOpacity } from "react-native";

export default function App() {
  const [persons, Setpersons] = useState([
    { id: 1, name: "Name" },
    { id: 2, name: "Name" },
    { id: 3, name: "Name" },
    { id: 4, name: "Name" },
    { id: 5, name: "Name" },
    { id: 6, name: "Name" },
    { id: 7, name: "Name" },
    { id: 8, name: "Name" },
    { id: 9, name: "Name" },
    { id: 10, name: "Name" },
    { id: 11, name: "Name" },
    { id: 12, name: "Name" },
    { id: 13, name: "Name" },
    { id: 14, name: "Name" },
    { id: 15, name: "Name" },
    { id: 16, name: "Name" },
    { id: 17, name: "Name" },
    { id: 18, name: "Name" },
    { id: 19, name: "Name" },
   
  ]);
  const [dis, setdis] = useState(false);
  const handelerDlete = (id) => {
    Setpersons(persons.filter((person) => person.id !== id));
  }

  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection:"row" ,display:"flex", height: 150,marginTop:50 ,backgroundColor:"black", padding: 20  }}>
        <ScrollView>

        {persons.map((person) => (
          <TouchableOpacity key={person.id} onPress={() =>handelerDlete(person.id)}>
          <View key={person.id} style={{ flex: 1, display: "flex", marginBottom: 10,backgroundColor:"red", justifyContent:"center",height:50, alignItems:"center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {person.name}
            </Text>
          </View>
          </TouchableOpacity>
        ))}
        </ScrollView>
        </View>
        
        <View style={[{ flexDirection:"row" , height: 150,marginTop:50 ,backgroundColor:"black",justifyContent:"center",alignItems:"center"  },
        dis ? { display: "flex" } : { display: "none" }

        ]}>
        <FlatList
       horizontal
       numRows={5}
     
        keyExtractor={(item) => item.id.toString()}
        data={persons}
        renderItem={({ item }) => (
          <View style={[
            { flex: 1, marginBottom: 10, backgroundColor: "green", justifyContent: "center", height: "100%", alignItems: "center", marginHorizontal: 10 },
           
          ]}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {item.name}
            </Text>
          </View>
        )}
        
        />
        </View>
        <Button title="toggle" onPress={() => setdis(!dis)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 20,
  },
});
