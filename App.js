import React from 'react';
import {View, Text, StyleSheet , Image, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Matrix from './src/components/Matrix';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#607d8b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    marginTop: 16
  },
  menu: {
    fontSize: 32,
    color: "#607d8b",
    marginTop: 16
  },
  elementaly: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

//Home
class HomeScreen extends React.Component{
  render(){
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'start'}}>
        <Image
            source={require("./assets/images/logo_emc2.png")}
            style={{ width: 150, height: 160, marginTop: 120}}
            />
        <Text style={styles.title}>Menu</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Introduction')}
        >
          <Text style={styles.menu}> Introduction </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Elementaly')}
        >
          <Text style={styles.menu}> Elementaly </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Inverse')}
        >
          <Text style={styles.menu}> Inverse </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//Introduction
class Introduction extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Image
            source={require("./assets/images/Mathwall.jpg")}
            style={{ width: 320, height: 256 }}
            />
        <Text style={{fontSize: 32}}>Comming soon...</Text>
      </View>
    );
  }
}

//Elementaly
class  Elementaly extends React.Component{
  render() {
    return (
      <View style={styles.elementaly}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ThreeByThree')}
        >
          <Text style={{fontSize: 56, color: "#607d8b"}}> 3×3 </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ThreeByFour')}
        >
          <Text style={{fontSize: 56, color: "#607d8b"}}> 3×4 </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class  ThreeByThree extends React.Component{
  render() {
    return (
      <Matrix/>
    );
  }
}

class  ThreeByFour extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 32}}>Comming soon...</Text>
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
        <Text style={{fontSize: 32}}>Comming soon...</Text>
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
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#c0c0c0',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
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