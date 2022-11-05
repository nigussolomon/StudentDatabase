import { Stack, Text, Button, TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Login(params) {
  const handleClick = () => {
    alert("Your reset OTP is 102345");
    params.navigation.navigate("PasswordReset")
  }
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

      <Text variant="body2">
        If you don't have an account{" "}
        <Text
          variant="body2"
          color="#00B822"
          onPress={() => params.navigation.navigate("Register")}
        >
          Register.
        </Text>
      </Text>
      <Button
        tintColor="#ffffff"
        color="#00B822"
        style={styles.btn}
        title="Login"
        onPress={() => alert("Sucessfully logged in")}
      />
      <Text variant="body2">
        Forgot your password?{" "}
        <Text
          variant="body2"
          color="#00B822"
          onPress={handleClick}
        > CLICK HERE</Text>
      </Text>
    </Stack>
  );
}

const styles = {
  headTxt: {
    fontWeight: "700",
    paddingBottom: 20,
  },
  btn: {
    color: "#ffffff",
    padding: 10,
  },
  hintText: {},
  input: {},
};
