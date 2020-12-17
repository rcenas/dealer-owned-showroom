import React from 'react';
import {View, Text} from 'react-native';
import store from './app/store/store';
import { Provider, connect } from 'react-redux';
import Index from './app/index';
 class App extends React.Component{
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