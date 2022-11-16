import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, IconButton } from "@react-native-material/core";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Register from "./components/Register";
import Login from "./components/Login";
import PasswordReset from "./components/PasswordReset";
import Home from "./layouts/Home";
import Menu from "./components/Menu";

const MenuIcon = (props) => <Icon name="menu" {...props} />;
const HomeIcon = (props) => <Icon name="home-outline" {...props} />;
const LogoutIcon = (props) => <Icon name="log-out" {...props} />;

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

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.windowView}>
      <Menu navigation={navigation}></Menu>
      <View style={styles.containerAlternative}>
        <Home></Home>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
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

            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Home" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  containerAlternative: {
    flex: 0.75,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  windowView: {
    backgroundColor: "#fff",
    flex: 1,
    color: "#fff",
  },
});
