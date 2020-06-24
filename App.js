import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  FlatList
} from "react-native";
import * as Animatable from "react-native-animatable";
import fatura from "../mainpage/assets/icons/fatura.png";
import avatar from "../mainpage/assets/icons/avatar.png";
import chat from "../mainpage/assets/icons/chat.png";

export default class HomeActivity extends Component {
  render() {
    //let dimensions = Dimensions.get("window");
    //let imageHeight = Math.round((dimensions.width * 9) / 16);
    //let imageWidth = dimensions.width;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.FlatList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.image}>
            <View style={styles.itens}>
              <Animatable.Image
                animation="pulse"
                style={styles.stretch}
                source={fatura}
              />
            </View>
          </View>
          <View style={styles.itens}>
            <Animatable.Image
              animation="pulse"
              style={styles.stretch}
              source={avatar}
            />
          </View>
          <View style={styles.itens}>
            <Animatable.Image
              animation="pulse"
              style={styles.stretch}
              source={chat}
            />
          </View>
          <View style={styles.itens}>
            <Animatable.Image
              animation="pulse"
              style={styles.stretch}
              source={fatura}
            />
          </View>
          <View style={styles.itens}>
            <Animatable.Image
              animation="pulse"
              style={styles.stretch}
              source={avatar}
            />
          </View>
          <View style={styles.itens}>
            <Animatable.Image
              animation="pulse"
              style={styles.stretch}
              source={chat}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 350,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  itens: {
    width: 280,
    height: 450,
    backgroundColor: "#0080ff",
    marginHorizontal: 10,
    borderRadius: 10,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginTop: 60,
    alignItems: "center"
  },
  info: {
    marginTop: 10,
    fontSize: 23,
    color: "#ddd",
    justifyContent: "center"
  },
  info2: {
    marginTop: 10,
    fontSize: 18,
    color: "#ddd",
    justifyContent: "center"
  },
  flatList: {
    paddingBottom: 30
  },
  stretch: {
    marginTop: -80,
    width: 150,
    height: 150,
    resizeMode: "contain",
    transform: [{ rotateZ: "0deg" }]
  },
  image: {
    position: "absolute"
  }
});
