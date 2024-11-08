/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InProgressTask from './src/screens/InProgressTask';
import CompletTask from './src/screens/CompletTask';

function App(): React.JSX.Element {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="All task">
        <stack.Screen name="All task" component={Home} />
        <stack.Screen name="In progres Task" component={InProgressTask} />
        <stack.Screen name="Complet Task" component={CompletTask} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
