import React from 'react';
import {View, Text, StyleSheet , Image, Button, TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ByThreeMat from './src/components/ByThreeMat';
import ByFourMat from './src/components/ByFourMat';
import CorrectAns from './src/components/CorrectAns';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#607d8b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    marginTop: 16,
    fontFamily: "Bradley Hand"
  },
  menu: {
    fontSize: 32,
    color: "#607d8b",
    marginTop: 16,
    fontFamily: "Bradley Hand"
  },
  elementaly: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333'
  }
});

//Home
class HomeScreen extends React.Component{
  render(){
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'start', backgroundColor: "#333"}}>
        <Image
            source={require("./assets/images/logo_EleMat.png")}
            style={{ width: 200, height: 200, marginTop: 120, }}
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
        {/* <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Inverse')}
        >
          <Text style={styles.menu}> Inverse </Text>
        </TouchableOpacity> */}
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
          onPress={() => this.props.navigation.navigate('ByThreeMat')}
        >
          <Text style={{fontSize: 56, color: "#607d8b", fontFamily: "Bradley Hand"}}> 3×3 </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ByFourMat')}
        >
          <Text style={{fontSize: 56, color: "#607d8b", fontFamily: "Bradley Hand"}}> 3×4 </Text>
        </TouchableOpacity>
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
    ByThreeMat: {
      screen:  ByThreeMat,
      navigationOptions: ({ }) => {
        return {
          title: '3×3',
        };
      },
    },
    ByFourMat: {
      screen:  ByFourMat,
    },
    CorrectAns: {
      screen:  CorrectAns,
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

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