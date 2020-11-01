import React,{useState} from 'react'
import {Button, TextInput, View} from 'react-native'
import  AsyncStorage  from '@react-native-community/async-storage';

export default function Notes(props) {
    const [value, setValue] = useState('')    
    const {dateString}=props.route.params.day;
    const saveNotes=async()=>{
        await AsyncStorage.setItem(dateString,JSON.stringify([{name: value}]))
        props.navigation.navigate('Calendar',{flag:true})
    }
    
    return (
        <View>
      <TextInput placeholder='name' onChangeText={(value)=>{
          setValue(value)
      }}/>
      <Button title='save' onPress={()=>saveNotes()}/>
      </View>

    )
}
