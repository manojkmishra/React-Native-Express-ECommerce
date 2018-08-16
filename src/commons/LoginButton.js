import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity, Image } from 'react-native';
import { images } from '../constants/images';
import { theme } from '../constants/theme';
import { FontAwesome } from '@expo/vector-icons';

const bgColor = type => 
{  switch (type) 
    { case 'google': return 'googleBlue';
      case 'facebook': return 'facebookBlue';
      default: return 'white';
    }
};


const LoginButton = ({ children, type, onPress }) => (
    <TouchableOpacity>
           <Box dir="row" align="center" shadow={1} bg={bgColor(type)} w="80%" self="center" p="2xs" radius="xs" mb="sm">
               <Box mr="sm">
                 <Box bg="white" h={32} w={32} radius="xs" center>
                    {type === 'google' && <Image source={images.googleColorIcon} />}
                    {type === 'facebook' && 
                      ( <FontAwesome  name="facebook" color={theme.color.facebookBlue} size={30}  style={{ position: 'absolute', right: 5, bottom: -3 }} />  )
                    }
                 </Box>
               </Box>
               <Box>
                  <Text color="white" size="md">{children}</Text>
               </Box>
           </Box>
    </TouchableOpacity>
);

export default LoginButton;