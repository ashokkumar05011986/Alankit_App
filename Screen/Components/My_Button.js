import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../../StyleFile/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../StyleFile/ColorFile';
const My_Button = props => {
  return (
    <TouchableOpacity style={props.style} onPress={props.customClick}>
      <View
        style={{ width: '85%', alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={styles.buttonTextStyle123}>{props.title}</Text>
      </View>
      <View
        style={{
          width: '15%',
          //alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <View style={styles.arrorstyle}>
          <AntDesign color={Colors.black} name="arrowright" size={25} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default My_Button;
