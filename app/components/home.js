import React from "react";
import { Button, View, Text } from "react-native";

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>Home</Text> 

        <Button
          title="btnAbout"
          onPress={() => this.props.navigation.navigate("About")}
        >
          Go to About
        </Button> 
      </View>
    );
  }
}

export default Home;
