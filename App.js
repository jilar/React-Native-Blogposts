import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Provider} from 'react-redux';
import{createStore, combineReducers} from 'redux';
import reducers from './src/reducers'
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

let store = createStore(reducers);

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show:ShowScreen,
  Create:CreateScreen,
  Edit:EditScreen
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
