import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Line from './Line';

const ModalComp = ({ modalTitle, modalBody, modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalHead}>
            <Text style={styles.modalHeadText}>{modalTitle}</Text>
          </View>
          <Line />
          <View style={styles.modalBody}>
            <Text style={styles.modalBodyText}>
              {modalBody}
            </Text>
          </View>
          <Line />
          <View style={styles.modalFoot}>
            <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(false)}>
              <Text>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHead: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  modalHeadText: {
    fontSize: 18,
    fontWeight: '500'
  },
  modalBody: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  modalBodyText: {
    fontSize: 16
  },
  modalFoot: {
    padding: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  modalFootText: {
    fontSize: 18,
    fontWeight: '500'
  },
  btn: {
    padding: 15,
    backgroundColor: '#CCC',
    borderRadius: 10,
    width: '25%',
    marginLeft: 5,
    alignItems: 'center'
  }
});

export default ModalComp;