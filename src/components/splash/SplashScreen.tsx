import React, { Component } from 'react';
import { View, Text, StatusBar, ImageBackground } from 'react-native';

interface Props {
  navigation: any
}
class Home extends Component<Props>{
  constructor(props: Props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 3000);
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={require('../../src/ford-bg.png')}>
        <StatusBar barStyle='light-content' />
        </ImageBackground>
    ) 
   }

}

export default Home;