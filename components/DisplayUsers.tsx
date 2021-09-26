import React from 'react'
import {View, Text} from "react-native"

function DisplayUsers({item}) {

        
    return (
        <View>
            <Text>
                Je suis : {item.first_name}
            </Text>
    
        </View>
    )
}

export default DisplayUsers
