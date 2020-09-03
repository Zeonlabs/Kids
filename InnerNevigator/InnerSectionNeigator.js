import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import logo from "../assets/splash.png";
import { HomePageNevigationArray } from "../Helper/StaticArray/HomePageNevigationArray";
import SplashScreen from "../Helper/Svg/Logo";
import PowerdBy from "../Helper/Svg/PowerdBy";
import { GujLatter } from "../Helper/StaticArray/InnerArray/GujNevigation";
// import backGround from "../assets/Background/EnglishAmount.png";

class InnerSectionNeigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // note: "",
    };
  }

  componentDidMount = () => {
    const { data, note } = this.props.route.params;
    this.setState({
      data,
      note,
    });
    // console.log("InnerSectionNeigator -> componentDidMount -> data", data);
  };

  render() {
    this.props.navigation.setOptions({
      headerShown: false,
    });
    return (
      // <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <View style={styles.mainBackground}>
        <View
          style={{
            // flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: "5%",
            // marginTop: 3,
            // marginBottom: 8,
            // padding: 20,
          }}
        >
          <SplashScreen />
        </View>
        <View style={{ marginBottom: 12, paddingLeft: 12 }}>
          {this.state.note}
        </View>
        <FlatList
          style={{
            padding: 8,
            // flex: 8,
            paddingLeft: 0,
            // paddingRight: 0,
            // marginBottom: -8,
          }}
          numColumns={5}
          data={this.state.data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={styles.mainView}
              // key={item[Object.keys(item)[0]].uid}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  this.props.navigation.navigate("DrawingBoard", {
                    backImage: item.backImage,
                  })
                }
              >
                {/* <View style={{ borderRadius: 20, borderWidth: 5 }}> */}
                <Text style={{ fontSize: 45, textAlign: "center" }}>
                  {item.letter}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
        {/* </View> */}
        <StatusBar hidden />
      </View>

      // </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: "#4A0075",
    flex: 1,
  },
  mainView: {
    width: "20%",
    marginBottom: 15,

    // height: 106.32,
    // elevation: 9,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "white",
    // height: 52,
    borderRadius: 10,
    // textAlign: "center",
    // padding: 10,
    // // marginRight: 8,
    marginLeft: 10,
  },
  fontColor: {
    color: "white",
    fontSize: 20,
  },
  fontNumber: {
    marginTop: 6,
  },
});

export default InnerSectionNeigator;
