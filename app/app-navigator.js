import React from 'react';
import {createStackNavigator,createDrawerNavigator,DrawerNavigator,createTabNavigator} from 'react-navigation';
import Home from './components/home';
import Home1 from './components/home1';
import About from './components/about';
import DrawerScreen from './draw-navigator';
 
const AppNavigator=DrawerNavigator ({
    Home:{screen:Home},  
    About:{screen:About} ,  
});
// const AppNavigator=createTabNavigator({
//     About:{screen:About}  , 
//     Home:{screen:Home},  
// });
// const AppNavigator=createStackNavigator({ 
//     About:{screen:About}  ,
//     Home:{screen:Home}, 
//     Home1:{screen:Home1},
// }); 
export default AppNavigator; 