import React, { Component } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { Body, Button, Card, CardItem, Container, Header, Icon, Input, Item, Left, Right, Thumbnail } from 'native-base';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../global/globalFile';


interface Props {}
interface State {
  searchClick: boolean;
}

let vehicle = [{
  id: 1,
  year: '2005',
  make: 'Chrysler',
  model: 'PT Cruiser',
  mileage: '70,575',
  stockNo: '205866A',
  vin: '3C4FY48B95T575563'
}, {
  id: 2,
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
      searchClick: false
    }
  }
  componentDidMount() {

  }
  renderRow(item: any) {
    return (<View style={{flex: 1}} key={item.id.toString()}>
      <Card>
        <CardItem>
          <Text>
            Sample
          {/* {item.year}{item.make} */}
      </Text>
          </CardItem>
          </Card>
    </View>)
  }
  // renderVehicleList() {
  //   return (<FlatList
  //     keyExtractor={(item, index) => index.toString()}
  //     data={vehicle}
  //     contentContainerStyle={{ flexGrow: 1 }}
  //     windowSize={10}
  //     renderItem={({ item, index}) => {this.renderRow(item, index)}}
  //   />)
  // }
  render(): JSX.Element {
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
        {/* {this.renderVehicleList()}    */}
        <ScrollView style={{ flex: 1 }}>
          {/* <View style={{flex: 1, backgroundColor: 'gray'}}>
            <Text>Sample</Text>
          </View> */}
        </ScrollView>
    </Container>
    )
  }
}