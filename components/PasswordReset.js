import { useState } from "react";
import { Stack, Text, Button, TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function PasswordReset(params) {
  const [otp, setOTP] = useState("");

  const handleClick = () => {
    if (otp === "102345") {
      alert("Password Reset Successful!");
      params.navigation.navigate("Login");
    } else {
      alert("Wrong OTP");
      params.navigation.navigate("Register");
    }
  };

  return (
    <Stack spacing={10}>
      <TextInput
        style={styles.input}
        variant="standard"
        color="#00B822"
        value={otp}
        secureTextEntry={false}
        onChangeText={(newvalue) => setOTP(newvalue)}
        placeholder="Enter you OTP"
        leading={(props) => <Icon name="account" {...props} />}
      />

      <TextInput
        style={styles.input}
        variant="standard"
        color="#00B822"
        secureTextEntry={true}
        placeholder="New Password"
        leading={(props) => <Icon name="account" {...props} />}
      />

      <TextInput
        style={styles.input}
        variant="standard"
        color="#00B822"
        secureTextEntry={true}
        placeholder="Confirm Password"
        leading={(props) => <Icon name="account" {...props} />}
      />

      <Button
        tintColor="#ffffff"
        color="#00B822"
        style={styles.btn}
        title="Reset Password"
        onPress={handleClick}
      />
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
