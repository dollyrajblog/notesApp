import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import stylesheet from './stylesheet';
import moment from 'moment';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {addHandler} from '../Spalsh/httprequest';
const EditScreen = ({navigation, route}) => {
  
  console.log(route.params.no, '=no==>');
  const [title, setTitle] = useState('d');
  const [description, setDescription] = useState('f');
  const onhandler = async () => {
    addHandler(title, description, navigation, route.params.no);
    const readHandler = async () => {
      
      try {
        const data = await database().ref('/userdata/').once('value');
        dispatch(setUser(data));
      } catch (err) {
        console.log(err);
      }
    };
    readHandler();
  };
  const state = useRef(null);
  useEffect(() => {
    state.current.focus();
  }, []);
  return (
    <SafeAreaView style={stylesheet.main}>
      <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
      <View style={stylesheet.inline}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name={'angle-left'}
            color={'#000'}
            size={24}
            style={stylesheet.iconstyle}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onhandler()}>
          <Icon
            name={'check'}
            color={'#12730f'}
            size={16}
            style={stylesheet.iconstyle}
          />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingScrollView
        containerStyle={[stylesheet.main, {margin: 8}]}
        scrollEnabled={true}>
        <TextInput
          style={stylesheet.titletxt}
          placeholder="Title"
          multiline={true}
          placeholderTextColor={'grey'}
          scrollEnabled={false}
          onChangeText={txt => setTitle(txt)}
        />
        <Text style={stylesheet.datatxt}>
          {moment().format('dddd | MMMM Do YYYY | h:mm a')}
        </Text>
        <TextInput
          ref={state}
          multiline={true}
          scrollEnabled={false}
          style={stylesheet.dsctxt}
          onChangeText={txt => setDescription(txt)}
        />
      </KeyboardAvoidingScrollView>
    </SafeAreaView>
  );
};
export default EditScreen;
