import React from 'react';
import {View, Text, StyleSheet , Image, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import styled from 'styled-components';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
  },
  menu: {
    fontSize: 30,
  }
});

//Home
class HomeScreen extends React.Component{
  render(){
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
            source={require("./assets/images/saruwakakun.png")}
            style={{ width: 150, height: 150 }}
            />
        <Text style={styles.title}>Matrix Menu</Text>
        <Button
          title='Introduction'
          color="#841584"
          onPress={() => this.props.navigation.navigate('Introduction')}
        />
        <Button
          title='Elementaly'
          onPress={() => this.props.navigation.navigate('Elementaly')}
        />
        <Button
          title='Inverse'
          onPress={() => this.props.navigation.navigate('Inverse')}
        />
      </View>
    );
  }
}

//Inrroduction
class Introduction extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Image
            source={require("./assets/images/Mathwall.jpg")}
            style={{ width: 320, height: 256 }}
            />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>ぷーーーーーーんっ</Text>
        <Text>ふぇぇぇぇぇぇぇい</Text>
      </View>
    );
  }
}

//Elementaly
class  Elementaly extends React.Component{
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
        <Button
          title='3×3'
          onPress={() => this.props.navigation.navigate('ThreeByThree')}
        />
        <Button
          title='3×4'
          onPress={() => this.props.navigation.navigate('ThreeByFour')}
        />
      </View>
    );
  }
}

class  ThreeByThree extends React.Component{
  render() {
    return (
      <View style={{display: 'inline-block'}}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

class  ThreeByFour extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

//Inverse
class  Inverse extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Image
            source={require("./assets/images/candy.png")}
            style={{ width: 320, height: 256 }}
            />
        <Text>The best is yet to be!</Text>
      </View>
    );
  }
}


//RootStack
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Introduction: {
      screen: Introduction,
    },
    Elementaly: {
      screen: Elementaly,
    },
    Inverse: {
      screen: Inverse,
    },
    ThreeByThree: {
      screen:  ThreeByThree,
    },
    ThreeByFour: {
      screen:  ThreeByFour,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);



//App
export default class App extends React.Component {
  render() {
    return (
      <AppContainer
      ref={nav => {
        this.navigator = nav;
      }}
      />
    );
  }
}