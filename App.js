import Expo from "expo";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Image,
  Button,
  Platform,
  AppState,
  StyleSheet,
  Text,
  View,
} from "react-native";
import HomeNevigator from "./InnerNevigator/HomeNevigator";
import InnerSectionNeigator from "./InnerNevigator/InnerSectionNeigator";
import DrawingBoard from "./DrawingScreen/DrawingBoard";

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // AppState.addEventListener("change", this.handleAppStateChangeAsync);
  }

  componentWillUnmount() {
    // AppState.removeEventListener("change", this.handleAppStateChangeAsync);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#133DAE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              // fontWeight: "bold",
              alignItems: "center",
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeNevigator} />
          <Stack.Screen name="Details" component={InnerSectionNeigator} />
          <Stack.Screen name="DrawingBoard" component={DrawingBoard} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
