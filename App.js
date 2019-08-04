import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import Matrix from './src/components/Homescreen';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Image
            source={require("./assets/images/Mathwall.jpg")}
            style={{ width: 320, height: 256 }}
            />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});