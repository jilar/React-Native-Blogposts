import React, {useState} from 'react';
import {View,StyleSheet,Text, Button, TextInput,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {addPost} from '../actions';
import {Field, reduxForm} from'redux-form';

const renderInput=({input,label})=>{
  return(
    <View>
    <Text style={{fontSize:20}}>{label}</Text>
    <TextInput
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={input.value}
      onChangeText={input.onChange}
    />
    </View>
  )
}

const CreateScreen= (props) =>{

const onSubmit= ({title,content})=>{
  if (title.length>1){
   props.addPost({title,id:Math.floor(Math.random()*99999),content});
   props.navigation.navigate('Index');
 };
}

 return(
   <View>
   <Field name='title' component={renderInput} label='Title'/>
   <Field name='content' component={renderInput} label='Enter Content'/>
   <Button
     title="Add New Post"
     onPress={props.handleSubmit(onSubmit)}
    />
    </View>
 )
}

const styles = StyleSheet.create({
  input: {
    fontSize:18,
    margin:15,
    borderColor:'black',
    borderWidth:1,
    padding: 5,
    margin:5
  },
    label:{
      fontSize:20,
      marginBottom:5
    }
});

//export default connect(null,{addPost})(CreateScreen);
const formWrapped= reduxForm({
  form:'addPost'
})(CreateScreen);

export default connect(null,{addPost})(formWrapped);
