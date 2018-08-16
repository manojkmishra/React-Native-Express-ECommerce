import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import OnboardingLogo from '../commons/OnboardingLogo';
import LoginButton from '../commons/LoginButton';



class LoginScreen extends Component 
{ state = {    };
 

  render() 
  {  const { opacity } = this.state;
  
    return (
      <Box f={1} center bg="white">
        <Box f={1} center>
            <OnboardingLogo />
        </Box>

        <Box f={0.9} w={1} >
        <LoginButton/>
        <LoginButton/>
        
        </Box>
      </Box>
    );
  }
}

export default LoginScreen;