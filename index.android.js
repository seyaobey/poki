/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { AnatomyExample } from './modules/anatomy/anatomyPage'; 
import { HomePage } from './modules/home/homepage';
import { SplashPage } from './modules/splashscreen/splashpage'

import Backendless from 'backendless';    

export default class poki extends Component {

  constructor(props){      
      super(props);
  }

  render() {

    return (
        <HomePage />
      );
  }

}

var APP_ID = '89B337E2-B59B-5B73-FF20-40383CB68A00';
var APP_KEY = 'A6AB9D68-8E57-0D82-FF3C-7C68C922C700';
var APP_VER = 'v1';
 
Backendless.initApp(APP_ID, APP_KEY, APP_VER);

AppRegistry.registerComponent('poki', () => poki);
