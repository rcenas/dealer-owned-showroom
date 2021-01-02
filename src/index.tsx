import React, {Component} from 'react';
import { BackHandler, Platform, StatusBar, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { ActionConst, Actions, Router, Scene } from 'react-native-router-flux';

import SplashScreen from './components/splash/SplashScreen';
import Dashboard from './components/dashboard/Dashboard';

interface Props { 
}

let backCounter: number = 0;
export default class Index extends Component<Props> {
  componentDidMount() {
    StatusBar.setBarStyle('light-content', true)
  }
  render() {
    return (
      <Router
        backAndroidHandler={() => {
          if (Actions.currentScene === 'dashboard') {
            backCounter++
            if (backCounter === 1) {
              ToastAndroid.show('Click back again to exit.', ToastAndroid.SHORT)
              setTimeout(() => {
                backCounter = 0
              }, 5000)
              return true
            } else if (backCounter === 2) {
              backCounter = 0
              BackHandler.exitApp()
            }
            return false
          } else {
            return Actions.pop()
          }
      }}>
        <Scene key='root'>
          <Scene
            key='splashScreen'
            component={SplashScreen}
            title='splashScreen'
            hideNavBar
            // initial
            type={ActionConst.RESET}
            statusBarStyle='light-content'
          />
          <Scene
            key='dashboard'
            component={Dashboard}
            hideNavBar
            initial
            panHandlers={null}
            type={ActionConst.RESET}
            statusBarStyle='light-content'/>
        </Scene>
      </Router>
    )
  }
  }
