import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  matrix: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
    // width: 500,
  },
  array: {
    fontSize: 64,
    alignItems: "center",
    textAlign: "center",
    width: 80,
    height: 80,
    borderWidth: 3,
    borderColor: "gray",
    borderRadius: 10,
    margin: 12
  },
  redArray: {
    fontSize: 64,
    alignItems: "center",
    textAlign: "center",
    width: 80,
    height: 80,
    borderWidth: 3,
    borderColor: "gray",
    borderRadius: 10,
    margin: 12,
    color: "red"
  }
  // selected: {
  //   color: "#D00000",
  //   fontSize: 100
  // }
});

export default class Matrix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row1: [2, 3, -1],
      row2: [1, -1, 2],
      row3: [1, 2, 0],
      touched1: false,
      touched2: false,
      touched3: false
    };
  }

  selectRow = async (rowNumber, value) => {
    if (!this.state.setRow1) {
      await this.setState({ setRow1: { row: rowNumber, value: value } });
    } else if (!this.state.setRow2) {
      await this.setState({ setRow2: { row: rowNumber, value: value } });
      await console.log(this.state.setRow1, this.state.setRow2);
    } else if (this.state.setRow1 && this.state.setRow2) {
      await this.setState({
        setRow1: undefined,
        setRow2: undefined
      });
      await this.setState({ setRow1: { row: rowNumber, value: value } });
    }
  };

  minas() {
    const r1 = this.state.setRow1.value;
    const r2 = this.state.setRow2.value;
    let result = [];

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
    const r1 = this.state.setRow1.value;
    const r2 = this.state.setRow2.value;
    let result = [];

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
  changeColor(row) {
    // if (row === 1) {
    //   this.setState({ touched1: true });
    // }

    switch (row) {
      case 1:
        this.setState({ touched1: true });
        break;
      case 2:
        this.setState({ touched2: true });
        break;
      case 3:
        this.setState({ touched3: true });
        break;
    }
  }

  rowsCalc() {
    return (
      <View style={{ flex: 1, backgroundColor: "yellow" }}>
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => {
              this.selectRow(1, this.state.row1), this.changeColor(1);
            }}
            style={{
              // flex: 1,
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Text style={this.state.touched1 ? styles.redArray : styles.array}>
              {this.state.row1[0]}
            </Text>
            <Text style={this.state.touched1 ? styles.redArray : styles.array}>
              {this.state.row1[1]}
            </Text>
            <Text style={this.state.touched1 ? styles.redArray : styles.array}>
              {this.state.row1[2]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.selectRow(2, this.state.row2), this.changeColor(2);
            }}
            style={{
              // flex: 1,
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Text style={this.state.touched2 ? styles.redArray : styles.array}>
              {this.state.row2[0]}
            </Text>
            <Text style={this.state.touched2 ? styles.redArray : styles.array}>
              {this.state.row2[1]}
            </Text>
            <Text style={this.state.touched2 ? styles.redArray : styles.array}>
              {this.state.row2[2]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.selectRow(3, this.state.row3), this.changeColor(3);
            }}
            style={{
              // flex: 1,
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Text style={this.state.touched3 ? styles.redArray : styles.array}>
              {this.state.row3[0]}
            </Text>
            <Text style={this.state.touched3 ? styles.redArray : styles.array}>
              {this.state.row3[1]}
            </Text>
            <Text style={this.state.touched3 ? styles.redArray : styles.array}>
              {this.state.row3[2]}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, backgroundColor: "green" }}>
          <TouchableOpacity
            onPress={() => {
              this.plus(), this.setState({ touched1: false, touched2: false, touched3: false });
            }}
          >
            <Text
              style={{
                fontSize: 64,
                alignItems: "center",
                textAlign: "center",
                color: "#D00000"
              }}
            >
              ＋
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.minas(), this.setState({ touched1: false, touched2: false, touched3: false });
            }}
          >
            <Text
              style={{
                fontSize: 64,
                alignItems: "center",
                textAlign: "center",
                color: "#D00000"
              }}
            >
              ー
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "blue" }}>
        <Text style={{ fontSize: 40 }}>3×3</Text>
        <Text style={{ fontSize: 32, marginBottom: 16 }}>Comming soon...</Text>
        {this.rowsCalc()}
      </View>
    );
  }
}
