import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity, Alert, Animated } from 'react-native';
import OnboardingLogo from '../commons/OnboardingLogo';
import LoginButton from '../commons/LoginButton';
import { FacebookApi } from '../api/Facebook';
import { GoogleApi } from '../api/Google';
import { inject } from 'mobx-react/native';

const BoxAnimated = Animated.createAnimatedComponent(Box);

@inject('currentUser')
class LoginScreen extends Component 
{ state = {    };
  onGooglePress = async () => 
  { //Alert.alert('Google Pressed')  ;
    console.log('/loginscreen-google-pressed'); 
    try {     console.log('/loginscreen-inside try after googlepress'); 
              console.log('loginscreen/login before this.props=', this.props);
              const token = await GoogleApi.loginAsync();
              console.log('loginscreen/google--token', token);
              console.log('loginscreen/login before this.props.currentUser=', this.props.currentUser);
              await this.props.currentUser.login(token, 'GOOGLE'); //now trigger login fn(inside models) with token & provider=google
              console.log('loginscreen/login after this.props=', this.props.currentUser);
        } catch (error) {      console.log('loginscreen/google-error', error); }
  };
  onFacebookPress = async () => 
  { // Alert.alert('Facebook Pressed')   
      console.log('/loginscreen-facebook-pressed');
    try {  const token = await FacebookApi.loginAsync();
           console.log('/loginscreen-facebook-token=', token);
        } catch (error) {  console.log('/loginscreen-error=', error); }
  };
  

  state = {    opacity: new Animated.Value(0),    position: new Animated.Value(0),  };
  componentDidMount() {    Animated.parallel([this.positionAnim(), this.opacityAnim()]).start();  }
  opacityAnim = () => {    Animated.timing(this.state.opacity, {  toValue: 1,  duration: 200,  delay: 100,  }).start();  };
  positionAnim = () => {    Animated.timing(this.state.position, {  toValue: 1,  duration: 300,  useNativeDriver: true,  }).start(); };
  
  render() 
  {  const { opacity } = this.state;
     const logoTranslate = this.state.position.interpolate({ inputRange: [0, 1], outputRange: [150, 0], });
    console.log('/LoginScreen-this.props',this.props);
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