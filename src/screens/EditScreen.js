import React, {useState} from 'react';
import {View,StyleSheet,Text, Button, TextInput,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {editPost} from '../actions';
import {Field, reduxForm} from'redux-form';

const renderInput=({input,label})=>{
  //input.value=null;
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

const EditScreen= (props) =>{
 const onSubmit= ({title,content})=>{
   //console.log(title+" "+content+" "+props.id);
  if (title.length>1){
    props.editPost({id:props.id,title,content});
    props.navigation.navigate('Index');
  };
 }

 return(
   <View>
     <Field name='title' component={renderInput} label='Title'/>
     <Field name='content' component={renderInput} label='Enter Content'/>
     <Button
       title="Edit Post"
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

const mapStateToProps=(state,ownProps)=>{
  const post= state.Posts.find((item)=>item.id == ownProps.navigation.getParam('id'));
  return {
    id:post.id,
    initialValues: {title:post.title, content:post.content}
  }
}

//export default connect(null,{addPost})(CreateScreen);
const formWrapped= reduxForm({
  form:'editPost',
})(EditScreen);

export default connect(mapStateToProps,{editPost})(formWrapped);
