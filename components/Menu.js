import {
  IconRegistry,
  Icon,
  Layout,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { Text, TextInput } from "@react-native-material/core";
import React from "react";
import * as eva from "@eva-design/eva";

export default function Menu(params) {
  const MenuIcon = (props) => <Icon name="menu" {...props} />;
  const AvatarIcon = (props) => <Icon name="people-outline" {...props} />;
  const PersonIcon = (props) => <Icon name="person-outline" {...props} />;
  const HomeIcon = (props) => <Icon name="home-outline" {...props} />;
  const LogoutIcon = (props) => <Icon name="log-out" {...props} />;
  const AddIcon = (props) => <Icon name="plus" {...props} />;
  const EditIcon = (props) => <Icon name="edit" {...props} />;
  const DeleteIcon = (props) => <Icon name="trash" {...props} />;
  const ListIcon = (props) => <Icon name="list-outline" {...props} />;

  const [menuVisible, setMenuVisible] = React.useState(false);
  const [accountMenuVisible, setAccountMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleAccountMenu = () => {
    setAccountMenuVisible(!accountMenuVisible);
  };

  const logout = () => {
    params.navigation.navigate("Login");
    toggleAccountMenu();
  };

  const profile = () => {
    params.navigation.navigate("Profile");
    toggleAccountMenu();
  };

  const Home = () => {
    params.navigation.navigate("Home");
    toggleMenu();
  };

  const newStudent = () => {
    params.navigation.navigate("AddStudent");
    toggleMenu();
  };

  const editStudent = () => {
    params.navigation.navigate("EditStudent");
    toggleMenu();
  };

  const deleteStudent = () => {
    params.navigation.navigate("DeleteStudent");
    toggleMenu();
  };

  const listStudent = () => {
    params.navigation.navigate("ListStudent");
    toggleMenu();
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderAccountAction = () => (
    <TopNavigationAction icon={AvatarIcon} onPress={toggleAccountMenu} />
  );

  const renderLeftActions = () => (
    <React.Fragment>
      <OverflowMenu
        style={{ marginTop: 30 }}
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem accessoryLeft={HomeIcon} title="Home" onPress={Home} />
        <MenuItem accessoryLeft={ListIcon} title="List" onPress={listStudent} />
        <MenuItem accessoryLeft={AddIcon} title="New" onPress={newStudent} />
        <MenuItem accessoryLeft={EditIcon} title="Edit" onPress={editStudent} />
        <MenuItem
          accessoryLeft={DeleteIcon}
          title="Delete"
          onPress={deleteStudent}
        />
      </OverflowMenu>
      <Text>{params.title}</Text>
    </React.Fragment>
  );

  const renderRightActions = () => (
    <React.Fragment>
      <OverflowMenu
        style={{ marginTop: 30 }}
        anchor={renderAccountAction}
        visible={accountMenuVisible}
        onBackdropPress={toggleAccountMenu}
      >
        <MenuItem accessoryLeft={PersonIcon} title="Profile" onPress={profile} />
        <MenuItem accessoryLeft={LogoutIcon} title="Logout" onPress={logout} />
      </OverflowMenu>
    </React.Fragment>
  );

  return (
    <TopNavigation
      style={{ minHeight: 128 }}
      accessoryLeft={renderLeftActions}
      accessoryRight={renderRightActions}
    />
  );
}
