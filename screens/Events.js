import React,{useState,useEffect} from 'react'
import {Text, View } from 'react-native';
import AsyncStorage  from '@react-native-community/async-storage';
import {Agenda} from 'react-native-calendars';
function Events(props) {
    const [data, setData] = useState({})
    const {dateString,day,month,timestamp,year}=props.route.params.day;

    useEffect(() => {
        AsyncStorage.getItem(dateString).then(v=>{
            const obj={}
            obj[dateString]=JSON.parse(v)
            setData(obj)
        })
    }, [])
    return (
        <Agenda
            items={data}
            selected={dateString}
            renderItem={(item, firstItemInDay) => {return (<View><Text>{item.name}</Text></View>);}}
            markedDates={{
                '2020-10-26': {selected: true, marked: true},
                '2020-10-27': {marked: true},
                '2020-10-28': {disabled: true}
            }}
            refreshing={false}
            theme={{'stylesheet.agenda.list':{dayText:{color:'red'}}}}
            style={{}}
        />
    )
}
export default Events;