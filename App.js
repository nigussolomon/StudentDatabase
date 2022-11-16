import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppBar, Button, IconButton } from "@react-native-material/core";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import {
  IconRegistry,
  Icon,
  Layout,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Register from "./components/Register";
import Login from "./components/Login";
import PasswordReset from "./components/PasswordReset";
import Home from "./layouts/Home";

const MenuIcon = (props) => <Icon name="menu" {...props} />;
const HomeIcon = (props) => (
  <Icon color="#00B822" name="home-outline" {...props} />
);
const LogoutIcon = (props) => (
  <Icon color="#00B822" name="log-out" {...props} />
);

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
  const navigateHome = () => {
    navigation.navigate("Home");
    setMenuVisible(!menuVisible);
  };

  const logout = () => {
    navigation.navigate("Login");
    setMenuVisible(!menuVisible);
  };

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderRightActions = () => (
    <React.Fragment>
      <OverflowMenu
        style={{ marginTop: 30 }}
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem
          accessoryLeft={HomeIcon}
          title="Home"
          onPress={navigateHome}
        />
        <MenuItem accessoryLeft={LogoutIcon} title="Logout" onPress={logout} />
      </OverflowMenu>
    </React.Fragment>
  );

  return (
    <View style={styles.windowView}>
      <TopNavigation
        style={{ minHeight: 128 }}
        accessoryRight={renderRightActions}
      />
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
        <StatusBar auto />
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
    flex: .75,
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
