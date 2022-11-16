import { Stack, Text, Button, TextInput} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

export default function ListStudent() {
  return (
    <Stack spacing={10}>
      <Text style={styles.headTxt} variant="h4">
        List Student
      </Text>
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
