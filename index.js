/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

console.disableYellowBox = true   // 关闭全部黄色警告，用于生产环境

AppRegistry.registerComponent(appName, () => App);
