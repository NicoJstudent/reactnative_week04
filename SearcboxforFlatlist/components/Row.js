import React from 'react';
import { Text } from 'react-native';

//export default function Row(props) {
//    return (
//        <text>{props.item.lastname}</text>
//    )
//}

export default function Row({person}) {
    return (
        <text>{person.lastname}, {person.firstname}</text>
    )
}