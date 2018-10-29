import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, } from 'react-navigation';
import React, { Component } from 'react';
import { NavigationService } from '../api/NavigationService';
import TabBar from '../components/TabBar';
import {theme} from '../constants/theme';

const primaryHeader = 
{ headerStyle: {   backgroundColor: theme.color.green,  },
  headerTintColor: theme.color.white,
  headerTitleStyle: { fontWeight: '400',},
};

const AuthNavigator = createStackNavigator(
   {     Login: {  getScreen: () => require('./LoginScreen').default, }, },
   {     navigationOptions: { header: null, },} //headers for login screen
  );

  const HomeStack = createStackNavigator(
    { Home: { getScreen: () => require('./HomeScreen').default, },    },
    { navigationOptions: { ...primaryHeader, }, },
    );

const TabNavigator = createBottomTabNavigator(
  {   Home: HomeStack , //{  getScreen: () => require('./HomeScreen').default, },     
      List: { getScreen: () => require('./ListScreen').default, },
      Stores: { getScreen: () => require('./StoresScreen').default, },
      Order: { getScreen: () => require('./OrderScreen').default,},
  },
  {   tabBarComponent: props => <TabBar {...props} />,},
);

const MainNavigator = createStackNavigator({ Tab: TabNavigator,  },
   {   navigationOptions: {  header:null // headerStyle:{backgroundColor: theme.color.green}    
                          },
   },

);

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