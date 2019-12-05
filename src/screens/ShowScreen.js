import React from 'react'
import {View,StyleSheet,Text} from 'react-native';

const ShowScreen = (props)=>{
  const blog =props.navigation.getParam('item');

  return(
    <View>
      <Text>{blog.title}</Text>
      <Text>{blog.id}</Text>
      <Text>{blog.content}</Text>
    </View>
  )
};

export default ShowScreen;
