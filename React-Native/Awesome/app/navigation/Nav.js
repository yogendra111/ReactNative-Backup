import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../main/Home';
import LocationSelector from '../main/LocationSelector';
import MainMenu from '../main/MainMenu';

const MainStack = createNativeStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <MainStack.Group>
          <MainStack.Screen name="Home" component={Home} />
          <MainStack.Screen name="MainMenu" component={MainMenu} />
        </MainStack.Group>

        <MainStack.Group
          screenOptions={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
            animationDuration: 200,
          }}>
          <MainStack.Screen
            name="LocationSelector"
            component={LocationSelector}
          />
        </MainStack.Group>
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default Nav;
