import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Image} from 'react-native';
import { images } from '../constants/images';


class SplashScreen extends Component 
{   state={};
    componentDidMount() {   this.checkAuth();  }
    checkAuth = () => {   // setTimeout(() => {  this.props.navigation.navigate('Auth');  }, 1000);    //check jwt token
                     };
    render() 
    {   return (
        <Box f={1} center >
          <Box mb="sm">
            <Image source={images.logo}/>
          </Box>
          <Box mb="sm">
            <Text size="2xl">Dowell
              <Text size="2xl" color="green"> Windows</Text>
            </Text> 
            <Text size="sm" >Easy Window Shopping</Text>
            </Box>
        </Box>
      );
    }
}
  
export default SplashScreen;