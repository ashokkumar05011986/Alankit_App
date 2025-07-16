import React from 'react';
import { TouchableOpacity, View, Modal, Text, StyleSheet } from 'react-native';
import styles from '../../StyleFile/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AwesomeAlert from 'react-native-awesome-alerts';

import FontFamily from '../../StyleFile/Fontfamily.js';

import Colors from '../../StyleFile/ColorFile.js';
const AwesomeAlert_model = props => {
  //const {show, ...attributes} = props;
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={props.show}
      onRequestClose={() => {}}
    >
      <View
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      >
        <View
          style={{
            width: '80%',
            paddingTop: 20,
            paddingBottom: 10,
            backgroundColor: '#FFFFFF',
            borderColor: '#000000',
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={styles.titleStyle}>{props.title}</Text>
          <Text style={styles.messageStyle}>{props.message}</Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: Colors.Button_color,
              paddingLeft: 30,
              paddingRight: 30,
              paddingTop: 10,
              paddingBottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10,
              borderRadius: 10,
              borderWidth: 0,
            }}
            onPress={props.customClickonCancelPressed}
          >
            <Text
              style={{
                color: Colors.black,
                fontSize: 16,
                fontFamily: FontFamily.fontFamily_value,
                textAlign: 'center',
              }}
            >
              Ok
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default AwesomeAlert_model;
