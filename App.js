import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { store } from "./utils/store";
import { Provider } from "react-redux";
import User from "./components/user";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <User />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
