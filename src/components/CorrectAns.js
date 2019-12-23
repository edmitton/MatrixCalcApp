import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

const styles = StyleSheet.create({
  container: {
    
  }
})

export default class CorrectAns extends React.Component{
  redirectPage() {
    switch (redirectNum) {
      case  3:
        this.props.navigation.navigate('ByThreeMat');
        break;
      case  4:
        this.props.navigation.navigate('ByFourMat');
        break;   
    }
  }

  render() {
    return (
      <Container style ={{backgroundColor: "#333"}}>
        <View style={{}}>          
        </View>
        <View
            style={{
              flex: 0.25,
              backgroundColor: "#333",
              alignItems: "center"
            }}
          >
            <Text style={{fontSize: 80, fontFamily: "Bradley Hand", color: "hotpink"}}>Excellent!</Text>

            <Text style ={{fontSize: 40, fontFamily: "Bradley Hand", color: "whitesmoke", marginTop: 30}}>rank?</Text>
            <View style={{height:  450}}>
              <Image
                 source={require("../../assets/images/rank_image.png")}
                 style={{ width: 320, height: 256, marginTop: 50 }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                // this.redirectPage();a
                // this.props.navigation.state.params.onGoBack();
                // this.props.navigation.goBack();
              }}
              
              style={{
                borderWidth: 3,
                backgroundColor: "brown",
                borderRadius:  20,
                borderColor: "brown",
                width: 150
              }}
            >
              <Text style={{ fontSize: 40, textAlign: "center", color: "white", lineHeight: 40 }}>
                Return!
              </Text>
            </TouchableOpacity>
          </View>
      </Container>
    );
  }
}
