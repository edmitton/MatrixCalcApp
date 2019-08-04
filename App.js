import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import { Container, Header, Content, Button} from 'native-base';
import Matrix from './src/components/Matrix';
import AppContainer from "./src/navigation/Navigator";
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render(){
    return (
      <>
      <AppContainer />
        <View style={styles.container}>
          <Image
              source={require("./assets/images/Mathwall.jpg")}
              style={{ width: 320, height: 256 }}
              />
          <Button light onPress={() => this.props.navigation.navigate('Matrix')}><Text> Light </Text></Button>
          <Text>Hello world</Text>
        </View>
      </>
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
