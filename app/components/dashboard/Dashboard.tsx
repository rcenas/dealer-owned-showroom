import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class Home extends Component{
  render() {
    return (
      <View style={{flex: 1}}>
         <Card>
        <Card.Image source={require('../../src/ford-bg.png')}>
          <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
          </Text>
        </Card.Image>
      </Card>
      </View>
     
    )
  }
}