import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {Provider} from 'react-redux';
import {store} from './store';
import AuthScreen from './screens/Auth';
import {navigationRef} from './routes/utils';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Image from './screens/Image';
import Cookie from './screens/Cookie';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Image"
            component={Image}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Cookie"
            component={Cookie}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
