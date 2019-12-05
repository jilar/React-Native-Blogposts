import React, {useState} from 'react';
import {View,StyleSheet,Text, Button, TextInput,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {addPost} from '../actions';

const CreateScreen= (props) =>{
 const [newBlog, setNewBlog]= useState("");
 return(
   <View>
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
         props.addPost({title:newBlog,id:Math.floor(Math.random()*99999)});
         props.navigation.navigate('Index');
       };
     }}
    />
    </View>
 )
}

const styles = StyleSheet.create({
  input: {
    margin:15,
    borderColor:'black',
    borderWidth:1,
  }
});

export default connect(null,{addPost})(CreateScreen);
