/**
 * Created by lichao on 2019/3/8.
 */
import React, { Component } from 'react'
import {
    View,
    Text,
} from 'react-native'

import MapView from 'react-native-maps';

export default class NavPage extends Component {
    static navigationOptions = {
        title: 'nav',
    };


    render() {
        return (
            <View style={{flex: 1,backgroundColor: 'red',  justifyContent: 'space-between'}}>
            <MapView style={{flex: 1, justifyContent: 'space-between'}}
                initialRegion={{
                    latitude:39.978600,
                    longitude: 116.326500,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    
                }}
                zoom = {8}
            />
            </View>
        )

    }
}