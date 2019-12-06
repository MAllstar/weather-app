import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Welcome from '../pages/Welcome';
import SignIn from '../pages/SingIn';
import Weather from '../pages/Weather';

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

const MainNavigator = createStackNavigator({
  SignInPage: {
    screen: Weather,
    navigationOptions: {
      title: 'Sign In'
    }
  },
});

export default AppNavigator = createAppContainer(createSwitchNavigator({
  Init: InitNavigator,
  Sign: SignNavigator,
  Main: MainNavigator,
}, {
  initialRouteName: 'Init',
}));
