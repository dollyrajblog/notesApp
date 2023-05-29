import {Text, View, Image, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import stylesheet from './stylesheet';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    title: 'Create free notes',
    text: 'We can create notes and collect our ides and plans in this application.',
    image: require('../../assets/images/4025692.png'),
    backgroundColor: '#59b2ab',
    iconstyle: {
      height: 260,
      width: 280,
    },
  },
  {
    key: 2,
    title: 'We can edit after write',
    text: 'After creating we need to change ih this notes so it is editable.',
    image: require('../../assets/images/13262.png'),
    backgroundColor: '#febe29',
    iconstyle: {
      height: 240,
      width: 320,
    },
  },
  {
    key: 3,
    title: 'We can delete also',
    text: "Somehtings we can't need all the nodes so we can delete it.",
    image: require('../../assets/images/2152.png'),
    backgroundColor: '#f27989',
    iconstyle: {
      height: 240,
      width: 280,
    },
  },
];
const Onbording = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View style={[stylesheet.main, {backgroundColor: item.backgroundColor}]}>
        <Image style={item.iconstyle} source={item.image} />
        <Text style={stylesheet.titletxt}>{item.title}</Text>
        <Text style={stylesheet.destxt}>{item.text}</Text>
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={stylesheet.bottomBtn}>
        <Text style={stylesheet.btntxt}>Done</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={stylesheet.bottomBtn}>
        <Text style={stylesheet.btntxt}>Next</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={stylesheet.bottomBtn}>
        <Text style={stylesheet.btntxt}>Skip</Text>
      </View>
    );
  };
  const onDone = () => {
    navigation.navigate('Dashboard');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
      <AppIntroSlider
        activeDotStyle={{backgroundColor: '#fff', height: 7, width: 15}}
        dotStyle={{backgroundColor: '#000'}}
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
      />
    </SafeAreaView>
  );
};
export default Onbording;
