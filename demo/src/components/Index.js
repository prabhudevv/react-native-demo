import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
// import { Fonts } from "../themes/themes";
import { StyleSheet, Text, ActivityIndicator, TouchableOpacity, View } from "react-native";

const Index = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(loaderTimeout);
  }, []);

  const goToComponentScreen = () => {
    navigation.navigate('SelectMode');
  }

  return (
    <LinearGradient colors={['#000000', '#380F21', '#D72D5C']} style={styles.container}>
      {isLoading ? (
        <View>
          <Text style={styles.gameName}>Loading...</Text>
        </View>
      ) : (
        <View>
          <View style={styles.gameNameContainer}>
            <Text style={styles.gameName}>TIC TAC TOE</Text>
          </View>
          <TouchableOpacity style={styles.btn} onPress={goToComponentScreen}>
            <Text style={styles.btnText}>Let's play</Text>
          </TouchableOpacity>
        </View>
      )}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gameNameContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  gameName: {
    fontSize: 25,
    fontWeight: '700',
    color: '#f9d967',
    // fontFamily: 'Game Of Squids'
    // fontFamily: Fonts.type.GameOfSquids,
  },
  btn: {
    backgroundColor: '#EDE4FF',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center'
  },
  btnText: {
    color: '#6528F7',
    fontSize: 16,
  }
});

export default Index;