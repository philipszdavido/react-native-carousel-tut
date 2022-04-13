import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import CarouselCards from "./CarouselCards";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CarouselCards />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});
