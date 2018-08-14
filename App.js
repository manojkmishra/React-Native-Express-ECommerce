import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { UtilityThemeProvider, Box, Text } from 'react-native-design-utility';

export default class App extends React.Component {
  render() {
    return (
      <UtilityThemeProvider>
      <Box f={1} center >
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
      </UtilityThemeProvider>
    );
  }
}

// const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',  },});
