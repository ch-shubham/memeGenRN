/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import MemeDetails from './screens/MemeDetails';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#A084CA',
            },
            headerTintColor: '#EBC7E8',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Home"
            options={{
              title: 'Welcome to the Laughter Party !',
            }}
            component={Home}
          />
          <Stack.Screen
            name="MemeDetails"
            options={{
              title: 'Description',
            }}
            component={MemeDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
