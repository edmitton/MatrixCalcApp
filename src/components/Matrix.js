import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
  array: {
    fontSize: 64,
    alignItems: "center",
    textAlign: "center"
  }
});

export default class Matrix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row1: [2, 3, -1],
      row2: [1, -1, 2],
      row3: [ 1,  2, 0]
    };
  }

  selectRow = async (rowNumber, value) => {
    if (!this.state.setRow1) {
      await this.setState({ setRow1: { row: rowNumber, value: value } });
    } else if (!this.state.setRow2) {
      await this.setState({ setRow2: { row: rowNumber, value: value } });
      await console.log(this.state.setRow1, this.state.setRow2);
    }
    else if (this.state.setRow1 && this.state.setRow2) {
      await this.setState({
        setRow1: undefined,
        setRow2: undefined
      });
      await this.setState({ setRow1: { row: rowNumber, value: value } });
    }
  };

  minas() {
		const r1 = this.state.setRow1.value
		const r2 = this.state.setRow2.value
		let result = []

    for (let i = 0; i < 3; i++) {
      result[i] = r1[i] - r2[i];
    }

    switch (this.state.setRow1.row) {
      case 1:
        this.setState({
          row1: result
        });
        break;
      case 2:
        this.setState({
          row2: result
        });
        break;
      case 3:
        this.setState({
          row3: result
        });
        break;
    }

    console.log(result);
  }

  plus() {
    const r1 = this.state.setRow1.value
		const r2 = this.state.setRow2.value
		let result = []

    for (let i = 0; i < 3; i++) {
      result[i] = r1[i] + r2[i];
    }

    switch (this.state.setRow1.row) {
      case 1:
        this.setState({
          row1: result
        });
        break;
      case 2:
        this.setState({
          row2: result
        });
        break;
      case 3:
        this.setState({
          row3: result
        });
        break;
    }

    console.log(result);
  }

  rowsCalc() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.selectRow(1, this.state.row1);
          }}
        >
          <Text style={styles.array}>
            {this.state.row1[0]} {this.state.row1[1]} {this.state.row1[2]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.selectRow(2, this.state.row2);
          }}
        >
          <Text style={styles.array}>
            {this.state.row2[0]} {this.state.row2[1]} {this.state.row2[2]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.selectRow(3, this.state.row3);
          }}
        >
          <Text style={styles.array}>
            {this.state.row3[0]} {this.state.row3[1]} {this.state.row3[2]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.plus();
          }}
        >
          <Text style={{fontSize: 64, alignItems: "center", textAlign: "center", color: "#D00000"}}>＋</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.minas();
          }}
        >
          <Text style={{fontSize: 64, alignItems: "center", textAlign: "center", color: "#D00000"}}>ー</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 32, marginBottom: 16 }}>Comming soon...</Text>
        <View>{this.rowsCalc()}</View>
        <Text style={{ fontSize: 32}}>
        </Text>
      </View>
    );
  }
}
