import { StyleSheet, View, Text } from "react-native";
function ToDo() {
  return (
    <View style={[styles.container, styles.greenBg]}>
      <View style={[styles.box, styles.blueBg]}>
        <Text>Hi My name is joe</Text>
      </View>
      <View style={[styles.box, styles.blueBg]}>
        <Text>Hi My name is fat</Text>
      </View>
    </View>
  );
}
export default ToDo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    height: 1,
    width: 400,
    gap: 20, //adds space between children top down
  },
  greenBg: {
    backgroundColor: "green",
  },
  blueBg: {
    backgroundColor: "blue",
  },
  box: {
    width: "95%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
});
