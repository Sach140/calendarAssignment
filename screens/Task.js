import React from 'react'
import {Text, View} from 'react-native'

export default function Task(props) {
    const {task}=props.route.params

    return (
        <View>
            <Text>{task.name}</Text>
        </View>
    )
}
