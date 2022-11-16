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
import AddStudent from "./layouts/addStudent";
import EditStudent from "./layouts/editStudent";
import ListStudent from "./layouts/listStudent";
import DeleteStudent from "./layouts/deleteStudent";
import Profile from "./layouts/profile"

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
      <Menu navigation={navigation} title="Home"></Menu>
      <View style={styles.containerHome}>
        <Home navigation={navigation} ></Home>
      </View>
    </View>
  );
};

const AddStudentScreen = ({ navigation }) => {
  return (
    <View style={styles.windowView}>
      <Menu navigation={navigation} title="New Student"></Menu>
      <View style={styles.containerHome}>
        <AddStudent></AddStudent>
      </View>
    </View>
  );
};

const EditStudentScreen = ({ navigation }) => {
  return (
    <View style={styles.windowView}>
      <Menu navigation={navigation} title="Edit Student"></Menu>
      <View style={styles.containerHome}>
        <EditStudent></EditStudent>
      </View>
    </View>
  );
};

const ListStudentScreen = ({ navigation }) => {
  return (
    <View style={styles.windowView}>
      <Menu navigation={navigation} title="List Student"></Menu>
      <View style={styles.containerHome}>
        <ListStudent></ListStudent>
      </View>
    </View>
  );
};

const DeleteStudentScreen = ({ navigation }) => {
  return (
    <View style={styles.windowView}>
      <Menu navigation={navigation} title="Delete Student"></Menu>
      <View style={styles.containerHome}>
        <DeleteStudent></DeleteStudent>
      </View>
    </View>
  );
};

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.windowView}>
      <Menu navigation={navigation} title="Profile"></Menu>
      <View style={styles.containerHome}>
        <Profile></Profile>
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
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="PasswordReset"
              component={PasswordResetScreen}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AddStudent" component={AddStudentScreen} />
            <Stack.Screen name="EditStudent" component={EditStudentScreen} />
            <Stack.Screen name="ListStudent" component={ListStudentScreen} />
            <Stack.Screen name="DeleteStudent" component={DeleteStudentScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
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

  containerHome: {
    flex: 0.5,
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
