import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity, Alert, Animated } from 'react-native';

import OnboardingLogo from '../commons/OnboardingLogo';


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
          <TouchableOpacity>
           <Box dir="row" align="center" shadow={1} bg="green" w="80%" self="center" p="2xs" radius="xs">
               <Box mr="sm">
                 <Box bg="white" h={32} w={32} radius="xs" center>
                    
                 </Box>
               </Box>
               <Box>
                  <Text color="white" size="md">Continue with Google</Text>
               </Box>
           </Box>
          </TouchableOpacity>
        </Box>
      </Box>
    );
  }
}

export default LoginScreen;