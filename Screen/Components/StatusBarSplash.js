import React, { useState, createRef, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../StyleFile/ColorFile.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const StatusBarSplash = () => {
  const insets = useSafeAreaInsets();
  const STATUS_BAR_HEIGHT =
    Platform.OS === 'ios' ? insets.top : StatusBar.currentHeight;
  function StatusBarSplash() {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[Colors.splashColor, Colors.splashColor]}
        style={{
          width: '100%',
          height: STATUS_BAR_HEIGHT,
        }}
      >
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient>
    );
  }
  return <StatusBarSplash />;
};
export default StatusBarSplash;
