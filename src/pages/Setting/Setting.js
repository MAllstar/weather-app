import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import UserInfo from './UserInfo';
import HistorySet from './HistorySet';
import SignOut from './SignOut';

const MyDrawerNavigator = createDrawerNavigator({
  '用户资料': UserInfo,
  '历史页面': HistorySet,
  '登录设置': SignOut,
}, {
  initialRouteName: '登录设置',
  drawerPosition: 'left',
  drawerType: 'front',
  hideStatusBar: true,
});

export default Setting = createAppContainer(MyDrawerNavigator);
