import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { StatusBar } from 'react-native';

class HomeScreen extends Component 
{   static navigationOptions = {  title: 'HomeTitle',  };
  
    state={};
    render() 
    {    console.log('/HomeScreen-this.props',this.props);
      return (
        <Box f={1} center >
          <StatusBar barStyle="light-content" />
          <Box h={130} bg="red" w={1}>
        
          </Box>
          <Text>HomeScreen</Text>
        </Box>
      );
    }
}
  
export default HomeScreen;