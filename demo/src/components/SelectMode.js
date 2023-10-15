import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const SelectMode = ({navigation}) => {

  const goToUserSelection = () => {
    navigation.navigate('UserSelection');
  }

  return (
    <LinearGradient colors={['#5D5FEF', '#843CE0']} style={styles.container}>
      <TouchableOpacity onPress={goToUserSelection}>
        <Text>Play with friends</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToUserSelection}>
        <Text>Play with computer</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SelectMode;