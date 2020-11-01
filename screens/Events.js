import React,{useState,useEffect} from 'react'
import {Text, View } from 'react-native';
import AsyncStorage  from '@react-native-community/async-storage';
import {Agenda} from 'react-native-calendars';
import { TouchableOpacity } from 'react-native-gesture-handler';
function Events(props) {
    const [data, setData] = useState({})
    const {dateString,day,month,timestamp,year}=props.route.params.day;
    const {markedData}=props.route.params

    useEffect(() => {
        AsyncStorage.getItem(dateString).then(v=>{
            const obj={}
            obj[dateString]=JSON.parse(v)
            setData(obj)
        })
    }, [])
    const openModel=(item)=>{
        props.navigation.navigate("Task",{task:item})
    }
    return (
        <Agenda
            items={data}
            selected={dateString}
            renderItem={(item, firstItemInDay) => {return (<View><TouchableOpacity onPress={()=>{
                openModel(item);
            }}><Text>{item.name}</Text></TouchableOpacity></View>);}}
            markedDates={markedData}
            refreshing={false}
            theme={{'stylesheet.agenda.list':{dayText:{color:'red'}}}}
            style={{}}
        />
    )
}
export default Events;