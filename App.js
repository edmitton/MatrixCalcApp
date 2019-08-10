import React from 'react';
import { Button, View, Text, StyleSheet , Image} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


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
      <View style={styles.container}>
        <Image
            source={require("./assets/images/ino.png")}
            style={{ width: 320, height: 256 }}
            />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>おけまる</Text>
        <Text>おけまる２</Text>
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
          style={{fontSize: 30}}
          title='Introduction'
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