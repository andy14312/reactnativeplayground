import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// for native build environmment, we need to register a
// component to our application for it to render on the screen
// ReactNative.AppRegistry.registerComponent('reactnativeplayground',() => App);
export default App;
