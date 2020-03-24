import React, {useState} from 'react';
import {View,StyleSheet,Text, Button, FlatList, TextInput,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {deletePost,addPost} from '../actions';
import {Feather} from '@expo/vector-icons';

const IndexScreen =(props) =>{
  return(
    <View>
      <FlatList
        data={props.Posts}
        keyExtractor={item => item.title}
        renderItem={({item})=> {
          return(
            <TouchableOpacity onPress={()=>props.navigation.navigate("Show", {item,id:item.id})}>
              <View style= {styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={()=>props.deletePost(item.id)}>
                  <Feather style={styles.icon} name='trash' />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) =>{
  return {
      headerRight:
      <TouchableOpacity onPress={()=>navigation.navigate("Create")}>
        <Feather name="plus" size={30} style={{marginRight:10}}/>
      </TouchableOpacity>
  };
};

const mapStateToProps=(state)=>{
  return {
    Posts: state.Posts
  }
}

const styles = StyleSheet.create({
  input: {
    margin:15,
    borderColor:'black',
    borderWidth:1,
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:20,
    paddingHorizontal:10,
    borderTopWidth:1,
    borderColor:'gray'
  },
  title:{
    fontSize:18
  },
  icon:{
    fontSize:24
  }

});

export default connect(mapStateToProps,{deletePost,addPost})(IndexScreen);
