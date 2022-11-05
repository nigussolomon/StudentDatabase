import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./components/Register";
import Login from "./components/Login";
import PasswordReset from "./components/PasswordReset";

const Stack = createNativeStackNavigator();
const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Register navigation={navigation}></Register>
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Login navigation={navigation}></Login>
    </View>
  );
};

const PasswordResetScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <PasswordReset navigation={navigation}></PasswordReset>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: "Register" }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />

        <Stack.Screen
          name="PasswordReset"
          component={PasswordResetScreen}
          options={{ title: "Password Reset" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
