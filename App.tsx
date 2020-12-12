import React from 'react';
import store from './app/store/store';
import { Provider, connect } from 'react-redux';
import Home from './app/components/dashboard/Home';


 const App: React.FC= () => {
  return (
    <Provider store={store}>
      <Home />  
    </Provider>
  )
}
export default App;