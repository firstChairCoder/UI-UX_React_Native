import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import Svg, { Path } from "react-native-svg";
import { isIphoneX } from "react-native-iphone-x-helper";

import { Home, Scan } from "../screens";
import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = ({
  accessibilityLabel,
  accessibilityState,
  children,
  onPress,
}) => {
  return (
    <View>
      <Text>Tabs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Tabs;
