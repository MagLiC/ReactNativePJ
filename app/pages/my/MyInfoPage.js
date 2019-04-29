/**
 * Created by lichao on 2019/4/15.
 */
import React from 'react'
import {
    View,
    Text,
} from 'react-native'

export default class MyInfoPage extends React.Component {
    static navigationOptions = {
        title:'个人信息',
        headerStyle:{backgroundColor:'#7bc6b4'},
        headerTitleStyle:{color:'white'},
    };
    render() {
        return <View>
            <Text>abc</Text>
        </View>
    }
}