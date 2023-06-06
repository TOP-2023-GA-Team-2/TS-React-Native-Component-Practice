import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AppProps {
  // Define props for your component here
}

const App: FC<AppProps> = ({ /* Destructure props here */ }) => {
  return (
    <View style={styles.container}>
      <Text>Hello there! This is React Native with Typescript</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
