import React,{useEffect,useState} from 'react'
import  AsyncStorage  from '@react-native-community/async-storage';
import {Calendar} from 'react-native-calendars';


const CalendarComponent=(props)=> {
      const loadData=()=>{
        AsyncStorage.getAllKeys().then(keysArray=>{
            var obj={}
            keysArray.map(async(key,index)=>{         
                obj[key]={selected: true, marked: true}
                setData({...data,...obj})
            })
            
        })
      }
    const [data, setData] = useState({})
    useEffect(() => {
    loadData()
    },[])

    const {params}=props.route
    useEffect(() => {
       if(params!==undefined){
           loadData();
       }
    }, [params])
    const selectDate=async(day)=>{
         const {dateString}=day;
         const storeKeys=await AsyncStorage.getAllKeys()
         if(storeKeys.includes(dateString)){
            props.navigation.navigate("Events",{day,markedData:data})
         }else{
            props.navigation.navigate("Notes",{day})
         }  
    }
    return (
        <Calendar
        style={{width:"100%"}}
        onDayPress={(day) => selectDate(day)}
        onDayLongPress={(day) => {console.log('selected day', day)}}
        disableMonthChange={true}
        onMonthChange={(month) => {console.log('month changed', month)}}
        showWeekNumbers={true}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={true}
        markedDates={data}
      />
      
    )
}
export default CalendarComponent;