import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity, Image } from 'react-native';



const LoginButton = ({  }) => (
    <TouchableOpacity>
           <Box dir="row" align="center" shadow={1} bg="green" w="80%" self="center" p="2xs" radius="xs" mb="sm">
               <Box mr="sm">
                 <Box bg="white" h={32} w={32} radius="xs" center>
                    <Text> G</Text>
                 </Box>
               </Box>
               <Box>
                  <Text color="white" size="md">Continue with Google</Text>
               </Box>
           </Box>
    </TouchableOpacity>
);

export default LoginButton;