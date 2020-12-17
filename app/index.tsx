import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SplashScreen from './components/splash/SplashScreen';
import Home from './components/dashboard/Home';


const Stack = createStackNavigator();

 class Index extends Component {
  render() {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen' headerMode='none'>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Home" component={Home} options={{ headerTitleAlign: 'center' }} />
        </Stack.Navigator> 
      </NavigationContainer>
      )
    } 
}

export default Index;