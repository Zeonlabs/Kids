import Expo from "expo";
import * as ExpoPixi from "../InnerNevigator/expo-pixi/lib/index";
import React, { Component } from "react";
import {
  Image,
  Button,
  Platform,
  AppState,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SplashScreen from "../Helper/Svg/Logo";
import { TouchableOpacity } from "react-native-gesture-handler";
import EraserIcon from "../Helper/Svg/Heading/EraserIcon";
import UndoIcon from "../Helper/Svg/Heading/UndoIcon";
import CameraIcon from "../Helper/Svg/Heading/CameraIcon";
import { HuePicker } from "react-color";

const isAndroid = Platform.OS === "android";
function uuidv4() {
  //https://stackoverflow.com/a/2117523/4047926
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default class DrawingBoard extends Component {
  state = {
    image: null,
    strokeColor: "black",
    strokeWidth: 20,
    lines: [],
    appState: AppState.currentState,
    backImage: <></>,
  };

  handleAppStateChangeAsync = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      if (isAndroid && this.sketch) {
        this.setState({
          appState: nextAppState,
          id: uuidv4(),
          lines: this.sketch.lines,
        });
        return;
      }
    }
    this.setState({ appState: nextAppState });
  };

  componentDidMount() {
    // console.log("DrawingBoard -> componentDidMount -> change");
    const { backImage } = this.props.route.params;
    // console.log("DrawingBoard -> componentDidMount -> backImage", backImage);
    this.setState({
      backImage,
    });
    AppState.addEventListener("change", this.handleAppStateChangeAsync);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this.handleAppStateChangeAsync);
  }

  onChangeAsync = async () => {
    const { uri } = await this.sketch.takeSnapshotAsync();
    // console.log("DrawingBoard -> onChangeAsync -> uri", uri);

    this.setState({
      image: null,
      strokeWidth: 8,
      strokeColor: "blue",
    });
  };

  handelClear = () => {
    console.log("asdsad");
    this.setState({
      lines: [],
    });
  };

  onReady = () => {
    console.log("ready!");
  };

  render() {
    this.props.navigation.setOptions({
      headerLeft: null,
      // headerTitleStyle: { justifyContent: "center", },
      title: "",
      headerTitle: () => (
        <View style={{ alignItems: "center" }}>
          <SplashScreen />
        </View>
      ),
      headerStyle: {
        backgroundColor: "#4A0075",
        height: 60,
      },
      // headerTintColor: '#606070',
    });
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.sketchContainer}>
            <View
              style={{
                position: "absolute",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View
                style={{
                  zIndex: 1000,
                  top: "3%",
                  left: "10%",
                  height: "50%",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#DDDDDD",
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 9,
                  }}
                >
                  <CameraIcon />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  zIndex: 1000,
                  right: "10%",
                  top: "3%",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#DDDDDD",
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 9,
                  }}
                  onPress={() => {
                    this.sketch.clear();
                  }}
                >
                  <EraserIcon />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#DDDDDD",
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 9,
                    top: "18%",
                    // marginTop: "10%",
                  }}
                  onPress={() => {
                    this.sketch.undo();
                  }}
                >
                  <UndoIcon />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {this.state.backImage}
            </View>
            <ExpoPixi.Sketch
              ref={(ref) => (this.sketch = ref)}
              style={styles.sketch}
              strokeColor={this.state.strokeColor}
              strokeWidth={this.state.strokeWidth}
              strokeAlpha={8}
              // onChange={this.onChangeAsync}
              // onReady={this.onReady}
              // initialLines={this.state.lines}
            />
            <View style={styles.label}>
              <Text>Canvas - draw here</Text>
              {/* <HuePicker /> */}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sketch: {
    flex: 1,
  },
  sketchContainer: {
    height: "100%",
  },
  image: {
    flex: 1,
  },
  imageContainer: {
    // height: "50%",
    borderTopWidth: 4,
    borderTopColor: "#E44262",
  },
  label: {
    width: "100%",
    padding: 5,
    alignItems: "center",
  },
  button: {
    // position: 'absolute',
    // bottom: 8,
    // left: 8,
    zIndex: 1,
    padding: 12,
    minWidth: 56,
    minHeight: 48,
  },
});
