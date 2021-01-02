import React, { Component } from 'react';
import { FlatList, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { Body, Button, Card, CardItem, Container, Header, Icon, Input, Item, Left, List, ListItem, Right, Thumbnail } from 'native-base';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../global/globalFile';
import { Actions } from 'react-native-router-flux';


interface Props {}
interface State {
  searchClick: boolean;
}
interface Vehicle{
  id: number;
  image: any;
  year: string;
  make: string;
  model: string;
  mileage: string;
  stockNo: string;
  vin: string; 
}

// interface VehicleList extends Array<Vehicle>{ }
let vehicle: Array<Vehicle> = [{
  id: 1,
  image:  require('../../assets/1.jpg'),
  year: '2005',
  make: 'Chrysler',
  model: 'PT Cruiser',
  mileage: '70,575',
  stockNo: '205866A',
  vin: '3C4FY48B95T575563'
}, {
    id: 2,
    image: require('../../assets/2.jpg'),
  year: '2017',
  make: 'Hyundai',
  model: 'Santa Fe Sport',
  mileage: '62,501',
  stockNo: '200336A',
  vin: '5XYZTDLB0HG442415'
}]
export default class Home extends Component<Props, State>{
  constructor(props: Props) {
    super(props)
    this.state = {
      searchClick: true,
    }
  }
  componentDidMount() {

  }
  _renderRow(item: Vehicle) {
    console.log(item)
    return (
      <TouchableHighlight style={{flex: 1, marginLeft: 5, marginRight: 5}} key={item.id.toString()}>
        <View style={{flex: 1}}>
          {/* <View style={{ flex: 1}}> */}
            <View style={{marginLeft: 5, marginTop: 5, marginBottom: 5}}>
              <Thumbnail large square={true} source={item.image} style={{}} scale={4.3} />
            </View>
          {/* </View>      */}
        </View>    
      </TouchableHighlight>
    )
  }
  renderVehicleList() {
    console.log(vehicle)
    return (<FlatList
      keyExtractor={(item) => item.id.toString()}
      data={vehicle}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      renderItem={({ item}) => this._renderRow(item)}
    />)
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: COLOR_PRIMARY }} searchBar rounded>
          <View style={{ alignSelf: 'center',}}>
            <Text style={{ color: COLOR_SECONDARY, marginRight: 10}}>LOGO HERE!</Text>
          </View>
          <Item style={{ marginRight: 10}}>
          <Icon type='MaterialIcons' name="search" />
          <Input placeholder="Search" />
          </Item>
          <View style={{alignSelf: 'center'}}>
            <Icon type='MaterialIcons' name='menu' style={{color: COLOR_SECONDARY}}  />
          </View>
        </Header>
        <View style={{ flex: 1 }}>
          {this.renderVehicleList()} 
        
        </View>
          
    </Container>
    )
  }
}