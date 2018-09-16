import React from "react";
import { View } from "react-native";

import AppNavigator from "./app/app-navigator";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      possibleFriends: ["Allie", "Gator", "Lizzie"],
      currentFriends: []
    };
  }

  render() {
    return <View>

    {/* <AppNavigator/> */}</View>;
  }
}
