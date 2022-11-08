import React, { useState, useEffect, useRef } from "react";
// import * as SplashScreen from 'expo-splash-screen';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
  ImageBackground,
  Text,
  Dimensions,
  Animated
} from "react-native";
import { styles } from "./styles";
import { colors } from "../../variables/colors";

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false); // показується клавіатура чи ні

  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const windowWidth = Dimensions.get('window').width; // для фону
  const windowHeight = Dimensions.get('window').height; // для фону

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const marginAnimated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const hide = Keyboard.addListener("keyboardWillHide", () => {
      keyboardHide();
      marginAnimated.current = new Animated.Value(2);
    });

    return () => {
      hide.remove();
    };
  }, []);

  useEffect(() => {
    const show = Keyboard.addListener("keyboardWillShow", () => {
      setIsShowKeyboard(true);
      marginAnimated.current = new Animated.Value(1);
    });

    return () => {
      show.remove();
    };
  }, []);

  useEffect(() => {
    if (!isShowKeyboard) {
      Animated.timing(
        // коли клавіатура схована
        marginAnimated,
        {
          toValue: 1,
          duration: 200,
          useNativeDriver: true
        }
      ).start();
      return;
    };

    Animated.timing(
      // коли клавіатура показана
      marginAnimated,
      {
        toValue: 2,
        duration: 200,
        useNativeDriver: true
      }
    ).start();
  }, [marginAnimated, isShowKeyboard])

  const onLogin = () => {
    console.log(name);
    console.log(email);
    console.log(password);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../images/registration/registerBack.png')}
          style={{
            ...styles.backgroundImage,
            width: windowWidth,
            height: windowHeight,
          }}
        >
          {/* <KeyboardAvoidingView
          behavior="position"
          contentContainerStyle={{ marginBottom: isShowKeyboard ? -185 : 0 }}
          > */}
          <Animated.View
            style={{
              ...styles.whiteBox,
              transform: [{
                translateY: isShowKeyboard
                  ?
                  marginAnimated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [120, 0]
                  })
                  :
                  marginAnimated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [120, 0]
                  }),
              }]
            }}
          // style={styles.whiteBox}
          >

            <View style={styles.titleBox}>
              <Text style={styles.title}> Реєстрація </Text>
            </View>
            <View style={styles.form}>
              <View>
                <TextInput
                  value={name}
                  onChangeText={nameHandler}
                  placeholder="Ім'я"
                  secureTextEntry={false}
                  clearButtonMode='while-editing'
                  style={{
                    ...styles.input,
                    borderColor: focusName ? 'red' : colors.inputBorder
                  }}
                  keyboardType='numbers-and-punctuation'
                  onFocus={() => setFocusName(true)}
                  onBlur={() => setFocusName(false)}
                />
                <TextInput
                  value={email}
                  onChangeText={emailHandler}
                  placeholder="Електронна пошта"
                  secureTextEntry={false}
                  clearButtonMode='while-editing'
                  style={{
                    ...styles.input,
                    borderColor: focusEmail ? 'red' : colors.inputBorder
                  }}
                  keyboardType='numbers-and-punctuation'
                  onFocus={() => setFocusEmail(true)}
                  onBlur={() => setFocusEmail(false)}
                />
                <TextInput
                  value={password}
                  onChangeText={passwordHandler}
                  placeholder="Пароль"
                  secureTextEntry={true}
                  clearButtonMode='while-editing'
                  style={{
                    ...styles.input,
                    borderColor: focusPassword ? 'red' : colors.inputBorder
                  }}
                  keyboardType='numbers-and-punctuation'
                  onFocus={() => setFocusPassword(true)}
                  onBlur={() => setFocusPassword(false)}
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
                onPress={onLogin}
              >
                <Text style={styles.buttonText}> Зареєструватися </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.haveAccountBox}>
                <Text style={styles.haveAccountText}> Вже є акаунт? Увійти </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
          {/* </KeyboardAvoidingView> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback >
  );
};

export default RegistrationScreen;