/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppNavigator from "./app/app-navigator"; 

AppRegistry.registerComponent(appName, () => AppNavigator);
