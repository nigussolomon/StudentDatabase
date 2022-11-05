import { Stack, Text, Button, TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Register(params) {
  return (
    <Stack spacing={10}>
      <TextInput
        style={styles.input}
        variant="standard"
        color="#00B822"
        placeholder="Username"
        leading={(props) => <Icon name="account" {...props} />}
      />

      <TextInput
        style={styles.input}
        variant="standard"
        color="#00B822"
        placeholder="Password"
        secureTextEntry={true}
        leading={(props) => <Icon name="lock" {...props} />}
      />

      <TextInput
        style={styles.input}
        variant="standard"
        color="#00B822"
        placeholder="Password Confirmation"
        secureTextEntry={true}
        leading={(props) => <Icon name="lock" {...props} />}
      />

      <Button
        tintColor="#ffffff"
        color="#00B822"
        style={styles.btn}
        title="Register"
        onPress={() => params.navigation.navigate("Login")}
      />

      <Text variant="body2">
        If you already have an account{" "}
        <Text
          color="#00B822"
          variant="body2"
          onPress={() => params.navigation.navigate("Login")}
        >
          Login.
        </Text>
      </Text>
    </Stack>
  );
}

const styles = {
  btn: {
    padding: 10,
  }
};
