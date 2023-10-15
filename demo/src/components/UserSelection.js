import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const UserSelection = ({ navigation }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const goToUserSelection = () => {
    navigation.navigate('Game', {selectedUser: selectedUser, player1: 'Prabhudev', player2: 'Jyotsna'});
  }

  return (
    <LinearGradient colors={['#5D5FEF', '#843CE0']} style={styles.container}>
      <View style={styles.userSelectionContainer}>
        <TouchableOpacity style={{ ...styles.userContainer, backgroundColor: selectedUser == true && selectedUser ? 'green' : null }} onPress={() => setSelectedUser(true)}>
          <Text style={styles.user}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.userContainer, backgroundColor: selectedUser == false ? 'green' : null }} onPress={() => setSelectedUser(false)}>
          <Text style={styles.user}>O</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={goToUserSelection}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userSelectionContainer: {
    flexDirection: 'row'
  },
  userContainer: {
    width: '10%',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10
  },
  user: {
    fontSize: 30,
    fontWeight: '700'
  }
});

export default UserSelection;