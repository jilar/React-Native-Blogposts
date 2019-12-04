import React, {useState} from 'react';
import {View,StyleSheet,Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';

const IndexScreen =(props) =>{
  return(
    <View><Text>{props.dummy}</Text></View>
  );
};

const mapStateToProps=(state)=>{
  return {
    dummy: state.dummyReducer
  }
}

export default connect(mapStateToProps)(IndexScreen);
