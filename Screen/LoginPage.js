import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ImageBackground,
  TextInput,
} from 'react-native';
import StatusBarSplash from './Components/StatusBarSplash';
import FontFamily from '../StyleFile/Fontfamily';
import Loader from './Components/Loader';
import styles from '../StyleFile/Styles.js';
import Colors from '../StyleFile/ColorFile.js';
import My_Button from './Components/My_Button';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AwesomeAlert_model from './Components/AwesomeAlert_model.js';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginPage = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);
  const [UserEmail, setUserEmail] = useState('');
  const [UserPassword, setUserPassword] = useState('');
  const [emailerror, setemailerror] = useState('');
  const [passworderror, setpassworderror] = useState('');
  const ref_to_email = useRef(null);
  const ref_to_password = useRef(null);
  const [passwordEncryption, setpasswordEncryption] = useState(true);
  const [AwesomeAlert_show, setAwesomeAlert_show] = useState(false);
  const [AwesomeAlert_title, setAwesomeAlert_title] = useState('');
  const [AwesomeAlert_Message, setAwesomeAlert_Message] = useState('');

  const Forgotclick = () => {
    setAwesomeAlert_show(true);
    setAwesomeAlert_title('working in progress!');
    setAwesomeAlert_Message('working in progress!');
  };
  const getLoginclick = () => {
    setAwesomeAlert_show(true);
    setAwesomeAlert_title('working in progress!');
    setAwesomeAlert_Message('working in progress!');
  };
  const customClickonCancelPressed = () => {
    setAwesomeAlert_show(false);
  };
  return (
    <>
      <StatusBarSplash />
      <AwesomeAlert_model
        show={AwesomeAlert_show}
        title={AwesomeAlert_title}
        message={AwesomeAlert_Message}
        showCancelButton={true}
        showConfirmButton={false}
        customClickonCancelPressed={() => customClickonCancelPressed()}
        customClickonConfirmPressed={() => customClickonCancelPressed()}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          paddingBottom: insets.bottom,
          //paddingTop: insets.top,
        }}
      >
        <ScrollView
          style={{ flex: 1, marginBottom: 5 }}
          automaticallyAdjustKeyboardInsets={true}
          contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <Loader loading={loading} />

          <ImageBackground
            source={require('../Image/login_background_image.png')}
            style={styles.imageBackground}
            resizeMode="contain"
          >
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={require('../Image//alankit_logo.png')}
                style={{ width: 165, height: 50, resizeMode: 'contain' }}
              />
              <Text
                style={{
                  fontSize: 20,
                  color: Colors.black,
                  fontFamily: FontFamily.fontFamily_700_value,
                  textAlign: 'left',
                  marginLeft: 10,
                }}
              >
                ConsularMetrics - Alankit
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    width: '10%',
                    height: 5,
                    backgroundColor: Colors.blue,
                  }}
                ></View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '10%',
                    height: 5,
                    backgroundColor: Colors.black,
                  }}
                ></View>
              </View>
            </View>
          </ImageBackground>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              paddingHorizontal: 20,
              marginTop: 30,
            }}
          >
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: Colors.black,
                  fontFamily: FontFamily.fontFamily_700_value,
                  textAlign: 'left',
                  marginLeft: 10,
                }}
              >
                Let's Sign In.!
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.black,
                  fontFamily: FontFamily.fontFamily_600_value,
                  textAlign: 'left',
                  marginLeft: 10,
                }}
              >
                Login to Your Account to check Performance
              </Text>
            </View>
            <View
              style={{
                height: 50,
                marginVertical: 10,
                borderColor: '#CCCCCC',
                borderRadius: 5,
                borderWidth: 1,
                flexDirection: 'row',
                width: '100%',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  width: '15%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: 10,
                }}
              >
                <Fontisto
                  name="email"
                  size={30}
                  color="#000000"
                  style={{ marginHorizontal: 5 }}
                />
                <Text
                  style={{
                    color: Colors.black,
                    display: 'none',
                    fontFamily: FontFamily.fontFamily_300_value,
                    marginHorizontal: 5,
                    fontSize: 16,
                  }}
                >
                  Email
                </Text>
              </View>
              <View style={{ width: '85%' }}>
                <TextInput
                  onChangeText={UserEmail => setUserEmail(UserEmail)}
                  placeholder="Email *" //dummy@abc.com
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  // keyboardType="numeric"
                  style={{
                    fontFamily: FontFamily.fontFamily_300_value,
                    fontSize: 16,
                    paddingLeft: 20,
                  }}
                  onSubmitEditing={() => {
                    ref_to_password.current.focus();
                  }}
                  value={UserEmail}
                />
              </View>
            </View>
            {emailerror.length > 1 && (
              <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
                <Text style={{ color: 'red' }}>{emailerror} *</Text>
              </View>
            )}
            <View
              style={{
                height: 50,
                marginVertical: 10,
                borderColor: '#CCCCCC',
                borderRadius: 5,
                borderWidth: 1,
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  width: '15%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: 10,
                }}
              >
                <AntDesign
                  name="lock"
                  size={30}
                  color="#000000"
                  style={{ marginHorizontal: 5 }}
                />
                <Text
                  style={{
                    color: Colors.black,
                    fontFamily: FontFamily.fontFamily_300_value,
                    marginHorizontal: 5,
                    display: 'none',
                    fontSize: 16,
                  }}
                >
                  Password
                </Text>
              </View>
              <View style={{ width: '70%' }}>
                <TextInput
                  onChangeText={UserPassword => setUserPassword(UserPassword)}
                  placeholder="Password *" //dummy@abc.com
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  secureTextEntry={passwordEncryption}
                  style={{
                    fontFamily: FontFamily.fontFamily_300_value,
                    fontSize: 16,
                    paddingLeft: 20,
                  }}
                  onSubmitEditing={() => {
                    Keyboard.dismiss();
                  }}
                  customref={ref_to_password}
                  value={UserPassword}
                />
              </View>
              <View
                style={{
                  width: '15%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Entypo
                  name={passwordEncryption ? 'eye' : 'eye-with-line'}
                  size={20}
                  color="#000000"
                  onPress={() => setpasswordEncryption(!passwordEncryption)}
                />
              </View>
            </View>
            {passworderror.length > 1 && (
              <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
                <Text style={{ color: 'red' }}>{passworderror} *</Text>
              </View>
            )}
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <My_Button
                title="Sign In"
                style={{
                  flexDirection: 'row',
                  backgroundColor: Colors.blue,
                  width: '100%',
                  height: 50,
                  justifyContent: 'center',
                  // alignItems: 'center',
                  marginTop: 10,
                  marginBottom: 10,
                  borderRadius: 40,
                  borderWidth: 0,
                }}
                customClick={() => getLoginclick()}
              />
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}
            >
              <View
                style={{
                  width: '25%',
                  borderTopWidth: 1,
                  borderColor: '#E6E6E6',
                }}
              />
              <TouchableOpacity
                onPress={() => Forgotclick()}
                style={{ width: '50%' }}
              >
                <Text
                  style={{
                    color: '#1F5FE9',
                    fontFamily: FontFamily.fontFamily_value,
                    fontSize: 18,
                    textAlign: 'center',
                    textDecorationLine: 'underline',
                  }}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: '25%',
                  borderTopWidth: 1,
                  borderColor: '#E6E6E6',
                }}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'none',
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.fontFamily_300_value,
              fontSize: 12,
            }}
          >
            Copyright 2023, InstaChatBox
          </Text>
          <Text
            style={{
              fontFamily: FontFamily.fontFamily_300_value,
              fontSize: 12,
            }}
          >
            All Rights Reserved.
          </Text>
        </View>
      </View>
    </>
  );
};

export default LoginPage;
