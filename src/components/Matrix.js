import React from 'react';
import {View, Text, StyleSheet , Image, Button, TouchableOpacity} from 'react-native';

export default class Matrix extends React.Component{

	constructor(props) {
    super(props);
    this.state = {
      text: ["1", "3", "5", "7", "9", "11", "13", "15", "17"],
    }
  }; 

	render() {
		return (
			<View style={{alignContent: 'space-between'}}>
				<Text>Open up App.js to start working on your app!</Text>
				{/* <Text style={{fontSize: 200}}>〔</Text> */}
				<TouchableOpacity>
					<Text style={{fontSize: 64, marginLeft: 80}}>{this.state.text[0]} {this.state.text[1]} {this.state.text[2]}</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={{fontSize:  64, marginLeft: 80}}>{this.state.text[3]} {this.state.text[4]} {this.state.text[5]}</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={{fontSize:  64, marginLeft:  80}}>{this.state.text[6]} {this.state.text[7]} {this.state.text[8]}</Text>
				</TouchableOpacity>
				{/* <Text style={{fontSize: 200}}>〕</Text> */}
			</View>
		);
	}
}