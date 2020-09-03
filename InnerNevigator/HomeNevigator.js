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
// import backGround from "../assets/Background/EnglishAmount.png";

class HomeNevigator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    this.props.navigation.setOptions({
      headerShown: false,
    });
    return (
      // <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <View style={styles.mainBackground}>
        <View
          style={{
            flex: 1.5,
            alignItems: "center",
            justifyContent: "center",
            // marginTop: 3,
            marginBottom: 8,
            // padding: 20,
          }}
        >
          <SplashScreen />
        </View>
        <View>
          <FlatList
            numColumns={2}
            data={HomePageNevigationArray}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={styles.mainView}
                // key={item[Object.keys(item)[0]].uid}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.button}
                  onPress={() =>
                    this.props.navigation.navigate("Details", {
                      data: item.innerNevigation,
                      note: item.headerNote,
                    })
                  }
                >
                  <View>{item.backGroundImage}</View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        {/* </View> */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 6,
          }}
        >
          <PowerdBy />
        </View>
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
    width: "50%",
    marginBottom: 15,

    // height: 106.32,
    // elevation: 9,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    // backgroundColor: "#6584F6",/
    alignItems: "center",
    height: 106.32,
    // borderRadius: 20,
    // padding: 10,
    // marginRight: 8,
    // marginLeft: 4,
  },
  fontColor: {
    color: "white",
    fontSize: 20,
  },
  fontNumber: {
    marginTop: 6,
  },
});

export default HomeNevigator;
