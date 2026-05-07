import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {


  const [Connected, setConnected] = useState(false);

  return (
    <View
      style={styles.container}
    >
      <View style={styles.card}>
        <Image source={require("../assets/images/myphoto.png")} style={styles.myimage}></Image>
        <Text style={styles.name}>Abdulrahman Omar</Text>
        <Text style={styles.title}>Softwere Engineer</Text>
        <TouchableOpacity onPress={() => { setConnected(!Connected) }}>
          <Text style={[
            styles.connect,
            {
              backgroundColor: Connected ? "#c70f0fff" : "#3a6ed4ff"
            }
          ]}>
            {!Connected ? "Connect" : "Connected"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffffff"
  },
  card: {
    backgroundColor: "#F6F3EB",
    padding: 20,
    paddingVertical: 45,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    borderRadius: 20
  },
  myimage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5
  },
  title: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 20
  },
  connect: {
    backgroundColor: "#3a6ed4ff",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "#fff",
  }

})
