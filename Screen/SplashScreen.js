import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Text,
  Image,
  useWindowDimensions,
  SafeAreaView,
  LogBox,
} from 'react-native';
import StatusBarSplash from './Components/StatusBarSplash';
import FontFamily from '../StyleFile/Fontfamily';
import Colors from '../StyleFile/ColorFile';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const splacelogin = async () => {
    const user_id = await AsyncStorage.getItem('user_id');
    console.log('user_id----', user_id);
    if (user_id === null) {
      navigation.replace('LoginPage');
    } else {
      //navigation.replace("Homepage");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      splacelogin(); // Replace "Login" with your target screen name
    }, 4000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <>
      <StatusBarSplash />
      <SafeAreaView
        style={{
          flex: 1,
          paddingBottom: insets.bottom,
          paddingTop: insets.top,
          backgroundColor: Colors.blue,
          alignContent: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../Image/alankit_logo.png')}
            style={{ width: 250, height: 65, resizeMode: 'contain' }}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#FFFFFF',
              fontFamily: FontFamily.fontFamily_value,
            }}
          >
            ConsularMetrics - Alankit
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SplashScreen;
