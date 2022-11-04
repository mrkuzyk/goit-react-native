import { StyleSheet } from "react-native";
import { colors } from "../../variables/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    // alignItems: 'center',
    justifyContent: 'flex-end',
  },
  whiteBox: {
    backgroundColor: colors.buttonText,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  titleBox: {
    alignItems: 'center',
    marginTop: 92,
  },
  title: {
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    color: colors.basicText,
  },
  form: {
    marginHorizontal: 16,
    marginTop: 16
  },
  input: {
    height: 50,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: colors.basicText,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.inputBorder,
    backgroundColor: colors.inputBackgroundColor,
    padding: 16,
    marginTop: 16,
  },
  button: {
    height: 51,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonBackground,
    borderRadius: 100,
    marginTop: 46,
  },
  buttonText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: colors.buttonText,
  },
  haveAccountBox: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 78,
  },
  haveAccountText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18.75,
    color: colors.secondText,
  }
});