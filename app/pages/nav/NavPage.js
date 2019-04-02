/**
 * Created by lichao on 2019/3/8.
 */
import React, { Component } from 'react'
import {
    View,
    Text,
} from 'react-native'

export default class NavPage extends Component {
    static navigationOptions = {
        title:'nav',
    };
    render() {
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>NavPage</Text>
            </View>
        )
    }
}