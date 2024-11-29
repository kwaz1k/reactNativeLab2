import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import jsLogo from "./assets/jsLogo.png";
import oneCLogo from "./assets/oneCLogo.png";

const langs = [
  { id: "1", lang: "JavaScript", experience: "3 года", logo: jsLogo },
  { id: "2", lang: "1C", experience: "Меньше года", logo: oneCLogo },
];

const ListItem = ({ lang, experience, logo }) => (
  <View style={styles.item}>
    <Image source={logo} style={styles.logo} />
    <View>
      <Text style={styles.lang}>{lang}</Text>
      <Text style={styles.experience}>Опыт: {experience}</Text>
    </View>
  </View>
);

export default function App() {
  return (
    <FlatList
      data={langs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ListItem lang={item.lang} experience={item.experience} logo={item.logo} />
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  lang: {
    fontSize: 18,
    fontWeight: "bold",
  },
  experience: {
    fontSize: 14,
    color: "#666",
  },
});
