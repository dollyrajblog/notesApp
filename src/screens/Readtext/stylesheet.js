import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
const stylesheet = StyleSheet.create({
  main: {
    flex: 1,
  },
  titletxt: {
    // backgroundColor: 'green',
    color: '#000',
    fontSize: 32,
    fontFamily: 'EBGaramond-SemiBold',
  },
  datatxt: {
    color: '#000',
    fontSize: 12,
    fontFamily: 'EBGaramond-Regular',
    // backgroundColor: 'yellow',
  },
  dsctxt: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'EBGaramond-Regular',
    // backgroundColor: 'blue',
  },
  iconstyle: {
    alignSelf: 'flex-end',
    padding: 8,
    // backgroundColor: 'red',
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
});

export default stylesheet;
