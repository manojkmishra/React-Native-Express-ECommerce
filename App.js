import React from 'react';
import { UtilityThemeProvider, Box, Text } from 'react-native-design-utility';
import Navigation from './src/screens';

export default class App extends React.Component {
  render() {
    return (
      <UtilityThemeProvider>
        <Navigation/>
      </UtilityThemeProvider>
    );
  }
}
