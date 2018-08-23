import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import OnboardingLogo from '../commons/OnboardingLogo';
import { inject } from 'mobx-react/native';

@inject('currentUser')
class SplashScreen extends Component 
{   state={};
    componentDidMount() {   this.checkAuth();  }
    checkAuth = async () => {  //  setTimeout(() => {  this.props.navigation.navigate('Auth');  }, 1000);    //check jwt token
                        await this.props.currentUser.setupAuth();
                        // setTimeout(() => { await this.props.currentUser.setupAuth();  }, 1000);    //check jwt token
                     };
    render() 
    {     console.log('/SplashScreen-this.props',this.props);
      return (
       <Box f={1} center>
         <OnboardingLogo />
       </Box>
      );
    }
}
  
export default SplashScreen;