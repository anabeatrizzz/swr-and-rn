import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 10
  },

  title: {
    color: 'black',
    fontWeight: '700'
  },

  body: {
    color: 'black'
  },

  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  btn: {
    color: 'black',
    fontWeight: '700',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
})

export default styles;