import {Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Spalsh from '../screens/Spalsh/Spalsh';
import Onbording from '../screens/Onbording/Onbording';
import Dashboard from '../screens/Dashboard/Dashboard';
import EditScreen from '../screens/EditScreen/EditScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Readtext from '../screens/Readtext/Readtext';
import {BlurView} from '@react-native-community/blur';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// export const BottomTab = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           height: 50,
//           alignItems: 'flex-start',
//           backgroundColor: '#000',
//           borderRadius:10,
//           margin:10
//         },
//         tabBarShowLabel: false,
//       }}>
//       <Tab.Screen
//         name="DashBoard"
//         component={Dashboard}
//         options={{
//           tabBarIcon: () => {
//             return (
//               <Icon
//                 name="plus-circle"
//                 size={40}
//                 color="blue"
//                 // style={{marginTop: -40}}
//               />
//             );
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
const Auth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Splash">
        <Stack.Screen name="Spalsh" component={Spalsh} />
        <Stack.Screen name="Onbording" component={Onbording} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
        <Stack.Screen name="Readtext" component={Readtext} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Auth;
