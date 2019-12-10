import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import UserInfo from './UserInfo';
import SignOut from './SignOut';

const MyDrawerNavigator = createDrawerNavigator({
  '用户资料': UserInfo,
  '退出登录': SignOut,
}, {
  initialRouteName: '用户资料',
  drawerPosition: 'left',
  drawerType: 'front',
  hideStatusBar: true,
});

export default Setting = createAppContainer(MyDrawerNavigator);
