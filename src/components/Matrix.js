import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import byThreeMatrix from "../json/byThreeMatrix";
console.log(byThreeMatrix);

const styles = StyleSheet.create({
  array: {
    fontSize: 64,
    color: "white",
    textAlign: "center",
    width: 80,
    height: 80,
    borderWidth: 3,
    borderColor: "gray",
    borderRadius: 10
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
    color: "red"
  },
  arraystr: {
    fontSize: 32,
    alignItems: "center",
    textAlign: "center",
    width: 40,
    height: 40,
    borderWidth: 3,
    borderColor: "gray",
    borderRadius: 10
  },
  redArraystr: {
    fontSize: 32,
    alignItems: "center",
    textAlign: "center",
    width: 40,
    height: 40,
    borderWidth: 3,
    borderColor: "gray",
    borderRadius: 10,
    color: "red"
  }
});
//actionステータス
// const options = [
//   { label: default, value: 0 },
//   { label: "足し算", value: 1 },
//   { label: "引き算", value: 2 },
//   { label: "掛け算", value: 3 },
//   { label: "割り算", value: 4 },
//   { label: "入れ替え", value: 5 },
// ];

export default class Matrix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row1: [2, 3, -1],
      row2: [1, -1, 2],
      row3: [1, 2, 0],
      touched1: false,
      touched2: false,
      touched3: false,
      touched4: false,
      action: 0,
      strageFlag: 0
    };
  }

  reset() {
    this.setState({
      setRow1: undefined,
      setRow2: undefined,
      touched1: false,
      touched2: false,
      touched3: false,
      action: 0,
      strageFlag: 0
    });
    if (this.state.row4) {
      this.setState({
        strageFlag: 0,
        row4: undefined
      });
    }
  }

  chooseRow = async (rowNumber, value) => {
    if (this.state.action == 0) {
      if (this.state.setRow1) {
        await this.setState({ setRow2: { row: rowNumber, value: value } });

        this.setState({ action: 5 });
        this.elemAction();
      } else {
        await this.setState({ setRow1: { row: rowNumber, value: value } });
      }
    } else if (this.state.action !== 0) {
      await this.setState({ setRow2: { row: rowNumber, value: value } });
      await console.log(this.state.setRow1, this.state.setRow2);

      this.elemAction();
    }
  };

  elemAction(value) {
    switch (this.state.action) {
      case 1:
        this.plus();
        break;
      case 2:
        this.minus();
        break;
      case 3:
        this.times(value);
        break;
      case 4:
        this.divi(value);
        break;
      case 5:
        this.changeRow();
        break;
    }
    this.reset();
  }

  storeRow(row, result) {
    if (this.state.strageFlag == 1) {
      this.setState({ row4: result });
    } else {
      switch (row) {
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
    }
  }

  plus() {
    const r1 = this.state.setRow1;
    const r2 = this.state.setRow2;
    let result = [];

    for (let i = 0; i < r1.value.length; i++) {
      result[i] = r1.value[i] + r2.value[i];
    }

    this.storeRow(r1.row, result);
    console.log(result);
  }

  minus() {
    const r1 = this.state.setRow1;
    const r2 = this.state.setRow2;
    let result = [];

    for (let i = 0; i < r1.value.length; i++) {
      result[i] = r1.value[i] - r2.value[i];
    }

    this.storeRow(r1.row, result);
    console.log(result);
  }

  times(mul) {
    const r1 = this.state.setRow1;
    let result = [];

    for (let i = 0; i < r1.value.length; i++) {
      result[i] = r1.value[i] * mul;
    }

    this.storeRow(r1.row, result);
    console.log(result);
  }

  divi(div) {
    const r1 = this.state.setRow1;
    let result = [];

    for (let i = 0; i < r1.value.length; i++) {
      result[i] = r1.value[i] / div;
    }

    this.storeRow(r1.row, result);
    console.log(result);
  }

  changeRow() {
    const r1 = this.state.setRow1;
    const r2 = this.state.setRow2;

    switch (r1.row) {
      case 1:
        this.setState({
          row1: r2.value
        });
        break;
      case 2:
        this.setState({
          row2: r2.value
        });
        break;
      case 3:
        this.setState({
          row3: r2.value
        });
        break;
    }
    switch (r2.row) {
      case 1:
        this.setState({
          row1: r1.value
        });
        break;
      case 2:
        this.setState({
          row2: r1.value
        });
        break;
      case 3:
        this.setState({
          row3: r1.value
        });
        break;
    }
  }

  changeColor(row) {
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
      <View style={{ flex: 1, backgroundColor: "black" }}>
        {this.rowStrage()}

        <View
          style={{
            flex: 2,
            justifyContent: "space-around",
            marginLeft: 30,
            marginRight: 30
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.chooseRow(1, this.state.row1), this.changeColor(1);
            }}
            style={{
              flexDirection: "row",
              justifyContent: "space-around"
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
              this.chooseRow(2, this.state.row2), this.changeColor(2);
            }}
            style={{
              flexDirection: "row",
              justifyContent: "space-around"
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
              this.chooseRow(3, this.state.row3), this.changeColor(3);
            }}
            style={{
              flexDirection: "row",
              justifyContent: "space-around"
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

        <View
          style={{
            flex:  0.5,
            backgroundColor: "navy",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.setState({ action: 1 });
            }}
            style={{
              borderRadius: 50,
              borderColor: "gray",
              borderWidth: 3,
              width: 80,
              height: 80,
            }}
          >
            <Text
              style={{
                fontSize: 80,
                color: "white",
                lineHeight: 80,
                textAlign: "center"
              }}
            >
              +
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({ action: 2 });
            }}
            style={{
              borderRadius: 50,
              borderColor: "gray",
              borderWidth: 3,
              width: 80,
              height: 80,
            }}
          >
            <Text
              style={{
                fontSize: 80,
                color: "white",
                lineHeight: 80,
                textAlign: "center"
              }}
            >
              -
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({ action: 3 });
            }}
            style={{
              borderRadius: 50,
              borderColor: "gray",
              borderWidth: 3,
              width: 80,
              height: 80,
            }}
          >
            <Text
              style={{
                fontSize: 80,
                color: "white",
                lineHeight: 80,
                textAlign: "center"
              }}
            >
              ×
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({ action: 4 });
            }}
            style={{
              borderRadius: 50,
              borderColor: "gray",
              borderWidth: 3,
              width: 80,
              height: 80,
            }}
          >
            <Text
              style={{
                fontSize: 80,
                color: "white",
                lineHeight: 80,
                textAlign: "center"
              }}
            >
              ÷
            </Text>
          </TouchableOpacity>

        </View>

        <View
          style={{
            flex: 0.5,
            backgroundColor: "navy",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.elemAction(2);
            }}
            style={{
              borderRadius: 50,
              borderColor: "gray",
              borderWidth: 3,
              width: 80,
              height: 80,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 64,
                color: "white",

              }}
            >
              2
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.elemAction(3);
            }}
            style={{
              borderRadius: 50,
              borderColor: "gray",
              borderWidth: 3,
              width: 80,
              height: 80,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 64,
                color: "white",
              }}
            >
              3
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.elemAction(5);
            }}
            style={{
              borderRadius: 50,
              borderColor: "gray",
              borderWidth: 3,
              width: 80,
              height: 80,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 64,
                color: "white",
              }}
            >
              5
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  rowStrage() {
    if (this.state.row4) {
      return (
        <View
          style={{
            flex: 0.25,
            // marginTop:  20,
            backgroundColor: "black",
            alignItems: "flex-end"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.chooseRow(4, this.state.row4);
            }}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              borderWidth: 3,
              backgroundColor: "aqua",
              borderRadius: 10,
              borderColor: "aqua",
              width: 150
            }}
          >
            <Text style={styles.arraystr}>{this.state.row4[0]}</Text>
            <Text style={styles.arraystr}>{this.state.row4[1]}</Text>
            <Text style={styles.arraystr}>{this.state.row4[2]}</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 0.25,
            backgroundColor: "black",
            alignItems: "flex-end"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.setState({ strageFlag: 1 });
            }}
            style={{
              borderWidth: 3,
              backgroundColor: "aqua",
              borderRadius: 10,
              borderColor: "aqua",
              width: 150
            }}
          >
            <Text style={{ fontSize: 40, textAlign: "center", color: "white", lineHeight: 40 }}>
              Stock!
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <Text style={{ color: "white", fontSize: 40, width: 120, height: 50, borderWidth: 3, borderColor: "gray" }}>3×3</Text>
        {this.rowsCalc()}
      </View>
    );
  }
}
