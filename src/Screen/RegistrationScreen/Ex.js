import React, { useState, useEffect } from "react";
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
} from "react-native";
import { styles } from "./styles";

const Ex = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const nameHandler = (text) => setName(text);
    const emailHandler = (text) => setEmail(text);
    const passwordHandler = (text) => setPassword(text);

    // useEffect(() => {
    //   const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
    //     setIsShowKeyboard(false);
    //   });

    //   return () => {
    //     hideSubscription.remove();
    //   };
    // }, []);

    // const onLogin = () => {
    //   Alert.alert("Credentials", `${name} + ${password}`);
    //   console.log(name);
    //   console.log(password);
    // };

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    };

    return (
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        // <View style={styles.container}>
        <ImageBackground
            source={require('../../images/registration/registerBack.png')}
            style={{
                ...styles.backgroundImage,
                width: windowWidth,
                height: windowHeight,
            }}
        >
            <KeyboardAvoidingView
                behavior="padding"
            // behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View style={styles.whiteBox}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}> Реєстрація </Text>
                    </View>
                    <View style={styles.form}>
                        <View
                        // style={{ marginBottom: isShowKeyboard && 100 }}
                        >
                            <TextInput
                                value={name}
                                onChangeText={nameHandler}
                                placeholder="Ім'я"
                                secureTextEntry={false}
                                clearButtonMode='while-editing'
                                style={styles.input}
                            // onFocus={() => setIsShowKeyboard(true)}
                            />
                            <TextInput
                                value={email}
                                onChangeText={emailHandler}
                                placeholder="Електронна пошта"
                                secureTextEntry={false}
                                clearButtonMode='while-editing'
                                style={styles.input}
                            // onFocus={() => setIsShowKeyboard(true)}
                            // selectionColor='#7cfc00'
                            />
                            <TextInput
                                value={password}
                                onChangeText={passwordHandler}
                                placeholder="Пароль"
                                secureTextEntry={true}
                                clearButtonMode='while-editing'
                                style={styles.input}
                            // onFocus={() => setIsShowKeyboard(true)}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.6}
                            onPress={keyboardHide}
                        >
                            <Text style={styles.buttonText}> Зареєструватися </Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.haveAccountBox}>
                                    <Text style={styles.haveAccountText}> Вже є акаунт? Увійти </Text>
                                </TouchableOpacity> */}
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
        // </View>
        // </TouchableWithoutFeedback>
    );
};

export default Ex;