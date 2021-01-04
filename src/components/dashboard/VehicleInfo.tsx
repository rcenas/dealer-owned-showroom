import React, { Component } from 'react';
import { View, Text } from 'react-native';

interface State {
  year: string;
  make: string;
  model: string;
  mileage: string;
  stockNo: string;
  vin: string; 
 }
interface Props {

}

export default class VehicleInfo extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        image: null,
        year: '',
        make: '',
        model: '',
        mileage: '',
        stockNo: '',
        vin: '',
    }
  }
  componentDidMount() {
    let vehicleInfoCopy = this.props.vehicleInfo
    this.setState({
        image: vehicleInfoCopy.image,
        year: vehicleInfoCopy.year,
        make: vehicleInfoCopy.make,
        model: vehicleInfoCopy.model,
        mileage: vehicleInfoCopy.mileage,
        stockNo: vehicleInfoCopy.stockNo,
        vin: vehicleInfoCopy.vin,
    })
    console.log(this.state)
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>{this.state.year}</Text>
      </View>
    )
  }
}