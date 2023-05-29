import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
const stylesheet = StyleSheet.create({
  main: {
    flex: 1,
  },
  topTxt: {
    color: '#000',
    fontSize: 32,
    marginLeft: 18,
    marginVertical: 25,
    fontFamily: 'EBGaramond-Bold',
  },
});
export default stylesheet;
