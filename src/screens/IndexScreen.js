import React, {useState} from 'react';
import {View,StyleSheet,Text, Button, FlatList, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {deletePost,addPost} from '../actions'

const IndexScreen =(props) =>{
  const [newBlog, setNewBlog]= useState("");
  return(
    <View>
      <FlatList
        data={props.Posts}
        keyExtractor={item => item.title}
        renderItem={({item})=> {
          return <Text>{item.title}</Text>
        }}
      />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={newBlog}
        onChangeText={(newValue)=>setNewBlog(newValue)}>
      </TextInput>
      <Button
        title="Add New Post"
        onPress={()=>{
          if (newBlog.length>1){
            props.addPost({title:newBlog});
            setNewBlog("");
          };
        }}
      />
    </View>
  );
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
    borderWidth:1
  }
});

export default connect(mapStateToProps,{deletePost,addPost})(IndexScreen);
