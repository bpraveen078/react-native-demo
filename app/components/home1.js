import React from "react";
import { Button, View, Text } from "react-native";

class Home1 extends React.Component {
  static navigationOptions = navigation => {
    let drawLabel = "Home1";
    let drawIcon = () => {
      <Button title="test" />;
    };
    return { drawLabel, drawIcon };
  };
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

export default Home1;
