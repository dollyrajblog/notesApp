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
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {updataHandler, deleteHandler} from '../Spalsh/httprequest';
const Readtext = ({route, navigation}) => {
  const state = useRef(null);
  useEffect(() => {
    state.current.focus();
  }, []);
  const [title, setTitle] = useState(route.params.data.title);
  const [description, setDescription] = useState(route.params.data.description);
  // console.log(route.params.data, '===>data');
  const addHandler = async () => {
    updataHandler(title, description, navigation, route.params.data.id);
  };
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
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => addHandler()}>
            <Icon
              name={'check'}
              color={'#12730f'}
              size={16}
              style={stylesheet.iconstyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => deleteHandler(route.params.data.id, navigation)}>
            <Icon
              name={'trash'}
              color={'#c93530'}
              size={14}
              style={stylesheet.iconstyle}
            />
          </TouchableOpacity>
        </View>
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
          defaultValue={title}
          onChangeText={txt => setTitle(txt)}
        />
        <Text style={stylesheet.datatxt}>{route.params.data.time}</Text>
        <TextInput
          ref={state}
          multiline={true}
          scrollEnabled={false}
          style={stylesheet.dsctxt}
          defaultValue={description}
          onChangeText={txt => setDescription(txt)}
        />
      </KeyboardAvoidingScrollView>
    </SafeAreaView>
  );
};
export default Readtext;
