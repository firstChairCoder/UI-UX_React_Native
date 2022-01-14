import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { colors, fonts, icons, images } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  padded: {
    paddingHorizontal: 25,
  },
  header: {
    flexDirection: "row",
    paddingTop: 50,
  },
  backBtn: { height: 20, width: 20 },
  headerText: {
    alignItems: "center",
    marginLeft: 12,
    color: colors.white,
    ...fonts.body3,
  },
  logoWrapper: {
    height: "15%",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "60%",
  },
  form: {
    marginTop: 40,
  },
  nameInput: {
    height: 40,
    paddingVertical: 5,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    color: colors.white,
    ...fonts.body3,
  },
});

const SignUp = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <LinearGradient
        style={styles.container}
        colors={[colors.lime, colors.emerald]}
      >
        <ScrollView style={styles.padded}>
          {/* header */}
          <View style={styles.header}>
            <Image
              style={styles.backBtn}
              source={icons.back}
              resizeMode={"contain"}
              tintColor={colors.white}
            />
            <Text style={styles.headerText}>Sign Up</Text>
          </View>

          {/* logo */}
          <View style={styles.logoWrapper}>
            <Image
              style={styles.logo}
              source={images.wallieLogo}
              resizeMode={"contain"}
            />
          </View>

          {/* full name */}
          <View style={styles.form}>
            <>
              <Text style={{ color: colors.white, ...fonts.body4 }}>
                Full Name
              </Text>

              <TextInput
                style={styles.nameInput}
                placeholder={"Enter Full Name"}
                placeholderTextColor={colors.lightGray}
                selectionColor={colors.white}
                underlineColorAndroid="transparent"
              />
            </>

            {/* phone no */}
            <>
              <Text style={{ color: colors.white, ...fonts.body4 }}>
                Phone Number
              </Text>

              <View style={{ flexDirection: "row", flex: 1 }}>
                <TouchableOpacity
                  style={{
                    height: 45,
                    paddingVertical: 5,
                    borderBottomColor: colors.white,
                    borderBottomWidth: 1,

                    flex: 1,
                  }}
                  onPress={() => console.warn("Flag picker pressed!")}
                >
                  <View style={{ justifyContent: "center", flex: 1 }}>
                    <Image
                      style={{ width: 10, height: 10, tintColor: colors.white }}
                      source={icons.down}
                    />
                  </View>
                </TouchableOpacity>
                <TextInput
                  style={{
                    marginLeft: 20,
                    marginBottom: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: colors.white,
                    paddingVertical: 5,
                    flex: 2.5,
                    color: colors.white,
                    ...fonts.body3,
                  }}
                  placeholder={"909090909"}
                  placeholderTextColor={colors.white}
                  selectionColor={colors.white}
                  underlineColorAndroid={"transparent"}
                />
              </View>
            </>

            {/* password */}
            <>
              <Text style={{ color: colors.white, ...fonts.body4 }}>
                Password
              </Text>
              <TextInput
                style={styles.nameInput}
                placeholder={"Enter Your Password"}
                placeholderTextColor={colors.lightGray}
                selectionColor={colors.white}
                underlineColorAndroid="transparent"
              />
            </>
          </View>

          {/* btn */}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
