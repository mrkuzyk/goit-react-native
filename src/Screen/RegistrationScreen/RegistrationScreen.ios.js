import React, { useState, useEffect, useRef } from "react";
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

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const hide = Keyboard.addListener("keyboardWillHide", () => {
      keyboardHide();
    });

    return () => {
      hide.remove();
    };
  }, []);

  // useEffect(() => {
  //   const show = Keyboard.addListener("keyboardWillShow", () => {
  //     setIsShowKeyboard(true);
  //   });

  //   return () => {
  //     show.remove();
  //   };
  // }, []);

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      // toValue: 0,
      // duration: 5000
    }).start();
  };

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
          <KeyboardAvoidingView
          // behavior="position"
          // contentContainerStyle={{ marginBottom: isShowKeyboard ? -185 : 0 }}
          >
            <Animated.View style={[
              styles.whiteBox,
              {
                opacity: fadeAnim
              }
              // marginBottom: isShowKeyboard ? 120 : 0
            ]}>
              <View style={styles.titleBox}>
                <Text style={styles.title}> Реєстрація </Text>
              </View>
              <Animated.View style={styles.form}>
                <View>
                  <TextInput
                    value={name}
                    onChangeText={nameHandler}
                    placeholder="Ім'я"
                    secureTextEntry={false}
                    clearButtonMode='while-editing'
                    style={styles.input}
                    onFocus={() => setIsShowKeyboard(true)}
                  />
                  <TextInput
                    value={email}
                    onChangeText={emailHandler}
                    placeholder="Електронна пошта"
                    secureTextEntry={false}
                    clearButtonMode='while-editing'
                    style={styles.input}
                    onFocus={() => setIsShowKeyboard(true)}
                  />
                  <TextInput
                    value={password}
                    onChangeText={passwordHandler}
                    placeholder="Пароль"
                    secureTextEntry={true}
                    clearButtonMode='while-editing'
                    style={styles.input}
                    onFocus={() => setIsShowKeyboard(true)}
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
              </Animated.View>
            </Animated.View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback >
  );
};

export default RegistrationScreen;