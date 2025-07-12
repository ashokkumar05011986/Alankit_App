import React, {useEffect, useState} from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from '../../StyleFile/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
const My_Button = (props) => {
  return (
    <TouchableOpacity
      style={props.style}
      onPress={props.customClick}>
      <Text style={styles.buttonTextStyle123}>
        {props.title}
      </Text>
      {/* <AntDesign style={{ marginLeft: 5, }} color="#000000" name="arrowright" size={25} /> */}
    </TouchableOpacity>
  );
};



export default My_Button;