import database from '@react-native-firebase/database';
import {useDispatch} from 'react-redux';
import {setUser} from '../../Redux/Action';
import {BackHandler} from 'react-native';
import moment from 'moment';
const readHandler = async () => {
  const dispatch = useDispatch();
  try {
    const data = await database().ref('/userdata/').once('value');
    dispatch(setUser(data));
  } catch (err) {
    console.log(err);
  }
};
const updataHandler = async (title, description, navigation, id) => {
  try {
    await database()
      .ref(`/userdata/${id}`)
      .update({
        time: moment().format('dddd | MMMM Do YYYY | h:mm a'),
        title: title,
        description: description,
      });
    readHandler();
    navigation.navigate('Dashboard');
  } catch (err) {
    console.log(err, '=err==>');
  }
};
const addHandler = async (title, description, navigation, no) => {
  console.log('===>', title, description, navigation);
  try {
    await database()
      .ref(`/userdata/${no}`)
      .set({
        id: no,
        time: moment().format('dddd | MMMM Do YYYY | h:mm a'),
        title: title,
        description: description,
      });
    readHandler();
    navigation.navigate('Dashboard');
  } catch (err) {
    console.log(err, '=err==>');
  }
};
const deleteHandler = async (id, navigation) => {
  try {
    await database().ref(`/userdata/${id}`).remove();
    navigation.navigate('Dashboard');
  } catch (err) {
    console.log(err, '=err==>');
  }
};
const handleBack = () => {
  const handleBackButton = () => true;
  BackHandler.addEventListener('hardwareBackPress', handleBackButton);
  return () => {
    BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
  };
};
export {readHandler, updataHandler, addHandler, deleteHandler, handleBack};
