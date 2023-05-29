import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
const stylesheet = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBtn: {
    height: 50,
    // backgroundColor: 'red',
    justifyContent: 'center',
    padding: 10,
  },
  titletxt: {fontFamily: 'EBGaramond-SemiBold', fontSize: 28, color: '#fff'},
  destxt: {
    fontFamily: 'EBGaramond-Regular',
    fontSize: 18,
    color: '#fff',
    padding: 20,
    alignSelf: 'flex-start',
  },
  btntxt: {color: '#fff', fontSize: 16, fontFamily: 'EBGaramond-Regular'},
});
export default stylesheet;
