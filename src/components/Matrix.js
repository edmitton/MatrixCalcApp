import React from 'react';
import {View, Text, StyleSheet , Image, Button, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
	array: {
		fontSize: 64,
		alignItems: 'center',
		textAlign: 'center'
	}
});

export default class Matrix extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
			row1: [1, 3, 5],
			row2: [2, 4, 6],
			row3: [7, 8, 9],
		}
	};

	rowsCalc() {
		return (
			<View>
				<TouchableOpacity>
					<Text style={styles.array}>{this.state.row1[0]} {this.state.row1[1]} {this.state.row1[2]}</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.array}>{this.state.row2[0]} {this.state.row2[1]} {this.state.row2[2]}</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.array}>{this.state.row3[0]} {this.state.row3[1]} {this.state.row3[2]}</Text>
				</TouchableOpacity>
			</View>
		);
	}

	render() {
		return (
			<View>
				<Text style={{fontSize: 32, marginBottom: 16}}>Comming soon...</Text>				
				<View>{this.rowsCalc()}</View>
			</View>
		);
	}
}