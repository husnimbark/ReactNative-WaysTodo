import React from "react";
import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,

} from "react-native";

import { Layout, Text, Button } from "react-native-rapi-ui";

import IndexImage from "../../../assets/IndexImage.png";

export default function ({ navigation }) {
  return (
    <Layout>
      <View style={styles.Index}>
        <Text style={styles.AppName}>
          Ways <Text style={styles.TextColorTo}>To</Text>
          <Text style={styles.TextColorDO}>DO</Text>
        </Text>
        <View style={styles.GroupIndex}>
          <Image style={styles.IndexImage} source={IndexImage} />
          <Text style={styles.Info}>
            Write your activity and finish your activity.
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "rgba(0,0,0,1)",
              textAlign: "center",
              justifyContent: "center",
              marginBottom: 90,
            }}
          >
            Fast, Simple and Easy to Use
          </Text>
          <View style={{width:320}}>
          <Button
          
            text="Login"
            onPress={() => {
              navigation.navigate("Login");
            }}
          ></Button>
          <Button
          color="rgba(0, 0, 0, 0.31)"
          style={{marginTop:10}}
            text="Register"
            onPress={() => {
              navigation.navigate("Register");
            }}
          ></Button>
          </View>
       
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  TextColorTo: {
    color: "#B82020",
    fontSize: 45,
  },

  TextColorDO: {
    color: "#ff5555",
    fontSize: 45,
  },

  Index: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  AppName: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 300,
    fontSize: 45,
    fontWeight: "900",
  },
  GroupIndex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 89,
    none: "0px",
    width: 310,
    height: 520,
  },
  IndexImage: {
    width: 228,
    height: 258,
    marginBottom: 54,
    bottom: 60,
  },
  Info: {
    fontSize: 14,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  Login: {
    paddingTop: 9,
    paddingBottom: 7,
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 11,
    borderRadius: 8,
    backgroundColor: "rgba(255,85,85,1)",
    width: 340,
    height: 40,
  },

  Register: {
    paddingTop: 9,
    paddingBottom: 7,
    textAlign: "center",
    fontWeight: "600",
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.31)",
    width: 340,
    height: 40,
  },
});
