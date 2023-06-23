import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login';

const screens = {
  Login: {
    screen: Login,
  },
};

const LoginStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#333',
    headerStyle: {backgroundColor: '#777', height: 90},
  },
});

export default LoginStack;
