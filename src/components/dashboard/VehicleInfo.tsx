import { Body, Button, Card, Fab, Header, Icon, Left, Right, Separator, Text, Title,  } from 'native-base';
import React, { Component } from 'react';
import { View, ScrollView, StatusBar, Image, TouchableOpacity, Platform, ImageBackground,  Dimensions, SafeAreaView, StyleSheet } from 'react-native';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'; 
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../global/globalFile';
import { Actions } from 'react-native-router-flux';
// import { StretchyScrollView, StretchySectionList } from 'react-native-stretchy';
// import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import Animated, { Easing } from "react-native-reanimated";
// import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'; 

const { Value, timing, Extrapolate, interpolate } = Animated;
const { height: wHeight, width: wWidth } = Dimensions.get("window");
export const HEADER_IMAGE_HEIGHT = wHeight / 3;

interface State {
  image: any;
  year: string;
  make: string;
  model: string;
  mileage: string;
  stockNo: string;
  vin: string; 
  scroll: any;
  active: boolean;
 }
interface Props {
  vehicleInfo: any;
}

// interface HeaderImageProps {
//   y: Animated.Value<number>;
// }

export default class VehicleInfo extends Component<Props, State> {
  _scroll_y: Animated.Value<any>;
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
      scroll: new Animated.Value(0),
      active: false,
    }
    this._scroll_y = new Value(0)
  }
  componentDidMount() {
    let vehicleInfoCopy = this.props.vehicleInfo;
    this.setState({
      image: vehicleInfoCopy.image,
      year: vehicleInfoCopy.year,
      make: vehicleInfoCopy.make,
      model: vehicleInfoCopy.model,
      mileage: vehicleInfoCopy.mileage,
      stockNo: vehicleInfoCopy.stockNo,
      vin: vehicleInfoCopy.vin,
    })
  }
  render() {
    const _diff_clamp_scroll_y = Animated.diffClamp(this._scroll_y, 0, 50)

    const _header_height = Animated.interpolate(_diff_clamp_scroll_y, {
      inputRange: [0, 50],
      outputRange: [50, 0],
      extrapolate: Extrapolate.CLAMP,
    })
    const _header_translate_y = Animated.interpolate(_diff_clamp_scroll_y, {
      inputRange: [0, 50],
      outputRange: [0, -50],
      extrapolate: Extrapolate.CLAMP,
    })
    const _header_opacity = Animated.interpolate(_diff_clamp_scroll_y, {
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP,
    })
    return (
      <SafeAreaView style={{flex: 1}}>
      <Animated.View style={[styles.header, {height: _header_height, transform: [{translateY: _header_translate_y}], opacity: _header_opacity}]}>
        {/* <StatusBar translucent backgroundColor='transparent' /> */}
          <ImageBackground source={this.state.image} style={styles.image}>
            <Header style={{backgroundColor: 'transparent'}} noShadow>
              <Left style={{ flex: 1}}>
              <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon style={{color: COLOR_PRIMARY}} type='MaterialIcons' name="arrow-back" />
          </TouchableOpacity>
              </Left>
            </Header>
        </ImageBackground>
        </Animated.View>
        <Animated.ScrollView contentContainerStyle={{flex: 1}} style={[styles.scroll_view]} showsVerticalScrollIndicator={false} bounces={false} scrollEventThrottle={5} onScroll={
          Animated.event([{
            nativeEvent: {
              contentOffset: {
            y: this._scroll_y
          }}}])
        }>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'column'}}>
            <Button transparent style={{}} onPress={() => {}}>
            <Icon style={{color: COLOR_PRIMARY, fontSize: hp('4%')}} type='MaterialIcons' name='photo' />
            </Button>
            </View>
          </View>
          <Card style={{ flex: 2.7, borderRadius: 20, marginLeft: 10, marginRight: 10, marginBottom: 10, backgroundColor: `#f0f8ff`}}>
            <View style={{ flex: 1}}>
              <Text style={{ textAlign: 'center', fontSize: hp('3%') }}>Vehicle Info</Text>
            </View>
          </Card>
        </Animated.ScrollView>
        
       </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: wWidth,
    resizeMode: "contain",
    height: HEADER_IMAGE_HEIGHT 
  },
  // {
  header: {
      alignItems: 'center',
      paddingHorizontal: 16 
  }, 
  scroll_view: {
    flex: 1,
  },
  fake_post: {
    flex: 1,
    marginHorizontal:16
  }
  });