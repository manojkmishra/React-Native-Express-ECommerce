import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity, Alert, Animated } from 'react-native';
import OnboardingLogo from '../commons/OnboardingLogo';
import LoginButton from '../commons/LoginButton';

const BoxAnimated = Animated.createAnimatedComponent(Box);


class LoginScreen extends Component 
{ state = {    };
  onGooglePress = async () => { Alert.alert('Google Pressed')   };
  onFacebookPress = async () => { Alert.alert('Facebook Pressed')   };
  

  state = {    opacity: new Animated.Value(0),    position: new Animated.Value(0),  };
  componentDidMount() {    Animated.parallel([this.positionAnim(), this.opacityAnim()]).start();  }
  opacityAnim = () => {    Animated.timing(this.state.opacity, {  toValue: 1,  duration: 200,  delay: 100,  }).start();  };
  positionAnim = () => {    Animated.timing(this.state.position, {  toValue: 1,  duration: 300,  useNativeDriver: true,  }).start(); };

  render() 
  {  const { opacity } = this.state;
     const logoTranslate = this.state.position.interpolate({ inputRange: [0, 1], outputRange: [150, 0], });
  
    return (
      <Box f={1} center bg="white">
        <BoxAnimated style={{flex: 1, transform: [ { translateX: logoTranslate, }]}}>
            <Box f={1} center>
                <OnboardingLogo />
            </Box>
        </BoxAnimated>
        <BoxAnimated f={0.9} w={1} style={{ opacity }} >
           <LoginButton onPress={this.onGooglePress} type="google">Continue with Google </LoginButton>
           <LoginButton onPress={this.onFacebookPress} type="facebook">Continue with Facebook </LoginButton>
        </BoxAnimated>
      </Box>
    );
  }
}

export default LoginScreen;