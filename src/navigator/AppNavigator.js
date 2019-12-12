import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Welcome from '../pages/Welcome';
import SignIn from '../pages/SingIn';
import MapStack from '../pages/Map/Map';
import WeatherStack from '../pages/Weather/Weather';
import HistoryStack from '../pages/History/History';
import Setting from '../pages/Setting/Setting';

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  }
});

const SignNavigator = createStackNavigator({
  SignInPage: {
    screen: SignIn,
    navigationOptions: {
      title: 'Sign In'
    }
  },
});

const BottomTabNavigator = createBottomTabNavigator({
  Map: { screen: MapStack },
  Weather: { screen: WeatherStack },
  History: { screen: HistoryStack },
  Setting: { screen: Setting },
}, {
  initialRouteName: 'Map',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Map') {
        iconName = 'md-locate';
      } else if (routeName === 'Weather') {
        iconName = `md-cloud${focused ? '-circle' : '-outline'}`;
      } else if (routeName === 'History') {
        iconName = `md-list-box`;
      } else if (routeName === 'Setting') {
        iconName = `md-settings`;
      }
      //   // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
      // return <HomeIconWithBadge name={iconName} size={25} color={tintColor} />
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});
const MainNavigator = createAppContainer(BottomTabNavigator);

export default AppNavigator = createAppContainer(createSwitchNavigator({
  Init: InitNavigator,
  Sign: SignNavigator,
  Main: MainNavigator,
}, {
  initialRouteName: 'Init',
}));
