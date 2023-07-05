/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './app/App';
import i18n from './app/language/i18n';

AppRegistry.registerComponent(appName, () => App);
