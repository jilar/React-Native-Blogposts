import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import {Provider} from 'react-redux';
import{createStore, combineReducers} from 'redux';
import reducers from './src/reducers'

let store = createStore(reducers);

const navigator = createStackNavigator({
  Index: IndexScreen
},{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:'Blog Posts'
  }
});

const App= createAppContainer(navigator);

export default () =>{
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
};
