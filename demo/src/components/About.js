import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ModalComp from "../commonComponents/ModalComp";
import { useState } from "react";

const About = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal}>
        <Text>Show Modal</Text>
      </TouchableOpacity>
      <ModalComp
        modalTitle={"Modal Title"}
        modalBody={"Modal Body"}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default About;