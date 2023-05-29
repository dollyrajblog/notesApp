import {SafeAreaView, Text, View, StatusBar, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import stylesheet from './stylesheet';
import RenderItem from '../../customcomponent/RenderItem';
import {AnimatedFAB} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {handleBack} from '../Spalsh/httprequest';

const Dashboard = ({navigation}) => {
  const [no, setno] = useState(0);
  // console.log('====>', data);
  let data = useSelector(state => state.data[0]._snapshot.value);
  useEffect(() => {
    handleBack();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
      <View style={stylesheet.main}>
        <Text style={stylesheet.topTxt}>Notes</Text>
        <FlatList
          data={data}
          renderItem={item => {
            if (item.item === null) {
            } else {
              setno(item.item.id);
              return <RenderItem item={item.item} navigation={navigation} />;
            }
          }}
          showsVerticalScrollIndicator={false}
        />
        <AnimatedFAB
          icon={'plus'}
          extended={false}
          visible={true}
          animateFrom={'right'}
          style={{bottom: 16, right: 16, position: 'absolute'}}
          onPress={() =>
            navigation.navigate('EditScreen', {no:no+1})
          }
          color="#12730f"
          rippleColor={'#b8d1ae'}
        />
      </View>
    </SafeAreaView>
  );
};
export default Dashboard;
