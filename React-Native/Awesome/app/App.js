import React, {useEffect} from 'react';
import Nav from './navigation/Nav';
import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid, Platform} from 'react-native';
import {store} from './redux/store';
import {Provider} from 'react-redux';
navigator.geolocation = require('@react-native-community/geolocation');

const getLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Tomato App Location Permission',
        message:
          'Cool Photo App needs access to your location ' +
          'to provide the current loaction.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the Location');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      getLocationPermission();
    } else {
      Geolocation.requestAuthorization();
    }
  }, []);
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
};

export default App;
