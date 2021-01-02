import React, { Component }  from 'react';
import {View, Text} from 'react-native';
import store from './app/store/store';
import { Provider, connect } from 'react-redux';
import Index from './src/index';
 class App extends Component{
  //  constructor(props: IAppProps)
  //  super(props);
  //    state = { store: store()};
   render() {
     return (
      // <Provider store={this.state.store}>
      //   <Home />  
      // </Provider>
      
          <Index />
     )
   }
 }
    

export default App;