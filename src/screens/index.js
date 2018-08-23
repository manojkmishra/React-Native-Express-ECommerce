import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, } from 'react-navigation';
import React, { Component } from 'react';
import { NavigationService } from '../api/NavigationService';

const AuthNavigator = createStackNavigator(
   {     Login: {  getScreen: () => require('./LoginScreen').default, }, },
   {     navigationOptions: { header: null, },} //headers for login screen
  );
const TabNavigator = createBottomTabNavigator({  Home: {  getScreen: () => require('./HomeScreen').default, },     });
const MainNavigator = createStackNavigator({ Tab: TabNavigator,  });
const AppNavigator = createSwitchNavigator(
    { Splash: {  getScreen: () => require('./SplashScreen').default,  },
      Auth: AuthNavigator,
      Main: MainNavigator,
    },
    { initialRouteName: 'Splash', },
  );
  
  class Navigation extends Component 
  { state = {};
    render() {
      // return <AppNavigator />;
      console.log('/screens/index.js-this.props',this.props);
      return(
              <AppNavigator ref={r => NavigationService.setTopLevelNavigator(r)} />
            );
    }
  }
  
  export default Navigation;