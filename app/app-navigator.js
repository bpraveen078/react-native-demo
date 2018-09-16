import React from 'react';
import {createStackNavigator,createDrawerNavigator,createTabNavigator} from 'react-navigation';
import Home from './components/home';
import About from './components/about';
import DrawerScreen from './draw-navigator';

const AppNavigator=createDrawerNavigator({
    About:{screen:About}  , 
    Home:{screen:Home},  
},
{
    contentComponent:DrawerScreen
});
// const AppNavigator=createTabNavigator({
//     About:{screen:About}  ,
//     Home:{screen:Home},  
// });
// const AppNavigator=createStackNavigator({
//     About:{screen:About}  ,
//     Home:{screen:Home},
// });
export default AppNavigator; 