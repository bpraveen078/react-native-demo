import React from "react";
import { Button, View, Text } from "react-native";

class About extends React.Component {
  render() {
    return (
      <View>
        <Text>About</Text>
        <Button
          title="brnHome"
          onPress={() => this.props.navigation.navigate("Home")} 
        > 
          Go to About
        </Button>
      
      </View>
    );
  }
}

export default About;
