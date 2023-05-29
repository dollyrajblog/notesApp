import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('screen');
const RenderItem = ({item, navigation}) => {
  return (
    <View
      style={{
        width: width / 1,
        paddingVertical: 5,
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#b8d1ae',
          width: width * 0.95,
          elevation: 2,
          padding: 8,
          borderRadius: 5,
          maxHeight: height * 0.2,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Readtext', {data: item})}>
          <Text>{`${item.title}`}</Text>
          <Text>
          {`${item.description}`}
           {/* {checkLng.length < 100
              ? `${item.description}`
           : `${checkLng.substring(0, 99)}...`}*/}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RenderItem;
