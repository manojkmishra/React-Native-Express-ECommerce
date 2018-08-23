import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';

class HomeScreen extends Component 
{   state={};
    render() 
    {    console.log('/HomeScreen-this.props',this.props);
      return (
        <Box f={1} center >
          <Text>HomeScreen</Text>
        </Box>
      );
    }
}
  
export default HomeScreen;