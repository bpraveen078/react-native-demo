import React from "react";
import { Button, View, Text,TouchableOpacity } from "react-native";

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
        <TouchableOpacity
          
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
        >
          <Text >Open Drawer</Text>
        </TouchableOpacity>
      </View>
    ); 
  }
}

export default Home;
