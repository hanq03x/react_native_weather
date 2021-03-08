import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

/* React Native는 span이나 Div같은거 안쓰고 Text로 글 표현해준다... */
/* View 는 React Native에서 Div 같은 존재이다 */

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Getting the FCKN weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FFF6AB",
  },
  text: {
    color: "gray",
    fontSize: 30,
  },
});
