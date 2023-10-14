import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(loaderTimeout);
  }, []);

  const goToComponentScreen = () => {
    navigation.navigate('About');
  }

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : (
        <TouchableOpacity style={styles.btn} onPress={goToComponentScreen}>
          <Text style={styles.btnText}>Go to components</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#EDE4FF',
    borderRadius: 10,
    padding: 15
  },
  btnText: {
    color: '#6528F7',
    fontSize: 16,
  }
});

export default Home;