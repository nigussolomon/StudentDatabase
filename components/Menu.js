import {
  IconRegistry,
  Icon,
  Layout,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import * as eva from "@eva-design/eva";

export default function Menu(params) {
  const MenuIcon = (props) => <Icon name="menu" {...props} />;
  const HomeIcon = (props) => <Icon name="home-outline" {...props} />;
  const LogoutIcon = (props) => <Icon name="log-out" {...props} />;

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const logout = () => {
    params.navigation.navigate("Login");
    toggleMenu();
  };

  const navigateHome = () => {
    params.navigation.navigate("Home");
    toggleMenu();
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
    <TopNavigation
      style={{ minHeight: 128 }}
      accessoryRight={renderRightActions}
    />
  );
}
