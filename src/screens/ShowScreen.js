import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import {EvilIcons} from '@expo/vector-icons';

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

ShowScreen.navigationOptions = ({navigation}) =>{
  return {
      headerRight:
      <TouchableOpacity onPress={()=>navigation.navigate("Edit", {id:navigation.getParam('id')})}>
        <EvilIcons name="pencil" size={35} style={{marginRight:10}}/>
      </TouchableOpacity>
  };
};

export default ShowScreen;
