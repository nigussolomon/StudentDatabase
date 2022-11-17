import { Stack, Text, Button, TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Divider, List, ListItem } from "@ui-kitten/components";
import { View } from "react-native";

export default function ListStudent() {
  const data = new Array(28).fill({
    title: "First Last Name",
    description: "Undergraduate Student",
  });

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
    />
  );

  return (
    <Stack spacing={10} style={styles.container}>
      <Text style={styles.headTxt} variant="h4">
        List Students
      </Text>
      <List
        data={data}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
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
    flexDirection: "row",
  },

  container: {
    marginBottom: 70,
  }
};
