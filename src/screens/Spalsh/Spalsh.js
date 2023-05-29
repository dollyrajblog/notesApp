import {SafeAreaView, Image, View, StatusBar, Text} from 'react-native';
import React, {useEffect} from 'react';
import stylesheet from './stylesheet';
import {readHandler} from './httprequest';
const Spalsh = ({navigation}) => {
  readHandler();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onbording');
    }, 1000);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
      <View style={stylesheet.main}>
        <Image
          style={{height: 80, width: 80}}
          resizeMode="cover"
          source={require('../../assets/images/notes.png')}
        />
        <Text
          style={{
            color: '#000',
            paddingTop: 10,
            fontFamily: 'EBGaramond-SemiBold',
            fontSize: 24,
          }}>
          Write Notes
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default Spalsh;
