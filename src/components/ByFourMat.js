import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation
} from "react-native";

import ByFourMatJson from "../json/ByFourMat";


// const scrId = this.props.navigation.state.params.scr;
const mat = ByFourMatJson;
var randomNum = Math.floor(Math.random() * 1);
var targetMat = mat[randomNum];

const styles = StyleSheet.create({
  row: {
    width: 80,
    height: 80,
    borderWidth: 3,
    borderColor: "gray",
    borderRadius: 10,
    justifyContent: "center"
  },
  touchedRow: {
    width: 90,
    height: 90,
    backgroundColor: "aliceblue",
    borderWidth: 3,
    borderColor: "gray",
    borderRadius: 10,
    justifyContent: "center"
  },
  array: {
    fontSize: 64,
    color: "white",
    textAlign: "center"
  },
  touchedArray: {
    fontSize: 74,
    fontWeight: "bold",
    textAlign: "center"
  },
  calcButton: {
    width: 80,
    height: 80,
    borderWidth: 3,
    borderColor: "gray",
    borderRadius: 50,
    justifyContent: "center"
  },
  touchedCalcButton: {
    width: 90,
    height: 90,
    borderWidth: 3,
    borderColor: "gray",
    borderRadius: 50,
    backgroundColor: "aliceblue",
    justifyContent: "center"
  },
  operater: {
    fontSize: 80,
    color: "white",
    lineHeight: 80,
    textAlign: "center",
  },
  touchedOperater: {
    fontSize: 90,
    fontWeight: "bold",
    lineHeight: 90,
    textAlign: "center"
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

const CustomLayoutSpring = {
  duration: 1000,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 0.7
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.7
  }
};

//actionステータス
// const options = [
//   { label: default, value: 0 },
//   { label: "足し算", value: 1 },
//   { label: "引き算", value: 2 },
//   { label: "掛け算", value: 3 },
//   { label: "割り算", value: 4 },
//   { label: "入れ替え", value: 5 },
// ];

export default class ByFourMat extends React.Component {
  constructor(props) {
    super(props);
    console.log(randomNum);
    // let targetMat = mat[randomNum];
    this.state = {
      row1: targetMat.r1,
      row2: targetMat.r2,
      row3: targetMat.r3,
      touched1: false,
      touched2: false,
      touched3: false,
      action: 0,
      strageFlag: 0
    };
  }

  resetAll() {
    LayoutAnimation.spring();
    this.setState({
      row1: targetMat.r1,
      row2: targetMat.r2,
      row3: targetMat.r3,
      row4: undefined,
      setRow1: undefined,
      setRow2: undefined,
      touched1: false,
      touched2: false,
      touched3: false,
      action: 0,
      strageFlag: 0
    });
  }

  resetState() {
    LayoutAnimation.spring();
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
    this.resetState();
  }

  //calcMethod
  plus() {
    const r1 = this.state.setRow1;
    const r2 = this.state.setRow2;
    let result = [];

    for (let i = 0; i < r1.value.length; i++) {
      result[i] = r1.value[i] + r2.value[i];
    }

    this.storeRow(r1.row, result);
    console.log(result);
    console.log(this.state.strageFlag);
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
        // LayoutAnimation.configureNext(CustomLayoutSpring, this.resetAll());
        LayoutAnimation.spring();
        this.setState({ touched1: true });
        break;
      case 2:
        LayoutAnimation.spring();
        this.setState({ touched2: true });
        break;
      case 3:
        LayoutAnimation.spring();
        this.setState({ touched3: true });
        break;
    }
  }

  check() {
    console.log(this.state.row1, this.state.row2, this.state.row3);
    let r1check = true;
    let r2check = true;
    let r3check = true;
    for (let i = 0; i < mat[0].ans_r1.length; i++) {
      if (mat[0].ans_r1[i] == this.state.row1[i]) {
        continue;
      } else {
        r1check = false;
        break;
      }
    }
    for (let i = 0; i < mat[0].ans_r2.length; i++) {
      if (mat[0].ans_r2[i] == this.state.row2[i]) {
        continue;
      } else {
        r2check = false;
        break;
      }
    }
    for (let i = 0; i < mat[0].ans_r2.length; i++) {
      if (mat[0].ans_r2[i] == this.state.row2[i]) {
        continue;
      } else {
        r2check = false;
        break;
      }
    }
    if (r1check && r2check && r3check) {
      this.props.navigation.navigate("CorrectAns", { key: 3 });
    } else {
      // this.props.navigation.navigate('CorrectAns', { key: 3 });
      alert("間違ってるみたい。。");
    }
  }

  render() {
    var availNum = targetMat.avail_num;
    return (
      <View style={{ flex: 1, backgroundColor: "#333" }}>
        <View
          style={{
            // flex: 0.25,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          {this.resetButton()}
          {this.rowStrage()}
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            marginHorizontal: 10,
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
            {this.state.row1.map(element => {
              return (
                <View style={this.state.touched1 ? styles.touchedRow : styles.row}>
                  <Text style={this.state.touched1 ? styles.touchedArray : styles.array}>
                    {element}
                  </Text>
                </View>
              );
            })}
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
            {this.state.row2.map(element => {
              return (
                <View style={this.state.touched2 ? styles.touchedRow : styles.row}>
                  <Text style={this.state.touched2 ? styles.touchedArray : styles.array}>
                    {element}
                  </Text>
                </View>
              );
            })}
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
            {this.state.row3.map(element => {
              return (
                <View style={this.state.touched3 ? styles.touchedRow : styles.row}>
                  <Text style={this.state.touched3 ? styles.touchedArray : styles.array}>
                    {element}
                  </Text>
                </View>
              );
            })}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.7,
            borderRadius: 20,
            backgroundColor: "#39475D"
          }}
        >
          <View
            style={{
              flex: 0.5,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            {this.plusButton()}
            {this.minusButton()}
            {this.timesButton()}
            {this.diviButton()}
          </View>
          <View
            style={{
              flex: 0.5,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-around"
              // borderRadius: 20,
            }}
          >
            {availNum.map(num => {
              return (
                <TouchableOpacity
                  key={num}
                  onPress={() => {
                    this.elemAction(num);
                  }}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                    borderColor: "gray",
                    borderWidth: 3,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 64,
                      color: "white"
                    }}
                  >
                    {num}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View
          style={{
            flex: 0.25,
            backgroundColor: "#333",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.check();
            }}
            style={{
              borderWidth: 3,
              backgroundColor: "brown",
              borderRadius: 20,
              borderColor: "brown",
              width: 150
            }}
          >
            <Text
              style={{
                fontSize: 40,
                textAlign: "center",
                color: "white",
                lineHeight: 40
              }}
            >
              Return!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  //calcButton
  plusButton() {
    if (targetMat.plus) {
      return (
        <TouchableOpacity
          onPress={() => {
            if (this.state.action == 1) {
              LayoutAnimation.spring();
              this.setState({ action: 0 });
            } else {
              LayoutAnimation.spring();
              this.setState({ action: 1 });
            }
          }}
          style={ this.state.action == 1  ? styles.touchedCalcButton : styles.calcButton }
        >
          <Text style={ this.state.action == 1 ? styles.touchedOperater : styles.operater }>
            {targetMat.plus}
          </Text>
        </TouchableOpacity>
      );
    }
  }

  minusButton() {
    if (targetMat.minus) {
      return (
        <TouchableOpacity
          onPress={() => {
            if (this.state.action == 2) {
              LayoutAnimation.spring();
              this.setState({ action: 0 });
            } else {
              LayoutAnimation.spring();
              this.setState({ action: 2 });
            }
          }}
          style={ this.state.action == 2  ? styles.touchedCalcButton : styles.calcButton }
        >
          <Text style={ this.state.action == 2 ? styles.touchedOperater : styles.operater }>
            {targetMat.minus}
          </Text>
        </TouchableOpacity>
      );
    }
  }

  timesButton() {
    if (targetMat.times) {
      return (
        <TouchableOpacity
          onPress={() => {
            if (this.state.action == 3) {
              LayoutAnimation.spring();
              this.setState({ action: 0 });
            } else {
              LayoutAnimation.spring();
              this.setState({ action: 3 });
            }
          }}
          style={ this.state.action == 3 ? styles.touchedCalcButton : styles.calcButton }
        >
          <Text style={ this.state.action == 3 ? styles.touchedOperater : styles.operater }>
            {targetMat.times}
          </Text>
        </TouchableOpacity>
      );
    }
  }

  diviButton() {
    if (targetMat.divi) {
      return (
        <TouchableOpacity
          onPress={() => {
            if (this.state.action == 4) {
              LayoutAnimation.spring();
              this.setState({ action: 0 });
            } else {
              LayoutAnimation.spring();
              this.setState({ action: 4 });
            }
          }}
          style={ this.state.action == 4 ? styles.touchedCalcButton : styles.calcButton }
        >
          <Text style={ this.state.action == 4 ? styles.touchedOperater : styles.operater }>
            {targetMat.divi}
          </Text>
        </TouchableOpacity>
      );
    }
  }

  resetButton() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.resetAll();
          }}
          style={{
            borderWidth: 3,
            backgroundColor: "aqua",
            borderRadius: 20,
            borderColor: "aqua",
            width: 150
          }}
        >
          <Text
            style={{
              fontSize: 40,
              textAlign: "center",
              color: "white",
              lineHeight: 40
            }}
          >
            Reset!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  rowStrage() {
    if (this.state.row4) {
      return (
        <View>
          <TouchableOpacity
            onPress={() => {
              this.chooseRow(4, this.state.row4);
            }}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              borderWidth: 3,
              backgroundColor: "aqua",
              borderRadius: 20,
              borderColor: "aqua",
              width: 150
            }}
          >
            {this.state.row4.map(element => {
              return (
              <Text style={styles.arraystr}>{element}</Text>
              );
            })}
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View>
          <TouchableOpacity
            onPress={() => {
              this.setState({ strageFlag: 1 });
            }}
            style={{
              borderWidth: 3,
              backgroundColor: "aqua",
              borderRadius: 20,
              borderColor: "aqua",
              width: 150
            }}
          >
            <Text
              style={{
                fontSize: 40,
                textAlign: "center",
                color: "white",
                lineHeight: 40
              }}
            >
              Stock!
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}
