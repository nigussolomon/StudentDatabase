import { Stack, Text, Button, TextInput, AppBar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

export default function Home() {
  return (
    <Stack spacing={10}>
      <Text style={styles.headTxt} variant="h4">
        Student Database
      </Text>
      <Text variant="body2">
        A place to store student information and retrieve it from anywhere you
        want at any time.
      </Text>

      <View style={styles.btnView}>
        <Button
          tintColor="#ffffff"
          color="#00B822"
          style={styles.btn}
          title="Students"
        />
      </View>
    </Stack>
  );
}

const styles = {
  headTxt: {
    fontWeight: "900",
    color: "#00B822",
  },

  btn: {
    color: "#ffffff",
    padding: 4,
    marginTop: 10,
  },

  btnView: {
    flexDirection: 'row',
  }
};
