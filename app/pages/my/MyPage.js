/**
 * Created by lichao on 2019/3/8.
 */
import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
} from 'react-native'

export default class MyPage extends Component {
    static navigationOptions = {
        title:'我',
        headerStyle:{backgroundColor:'#7bc6b4'},
        headerTitleStyle:{color:'white'},
    };
    render() {
        return(
            <ScrollView>
                <SpaceView/>
                <HeaderView/>
                <SpaceView/>
                <Text>123123</Text>
                <Text>123123</Text>
            </ScrollView>
        )
    }
}

class SpaceView extends Component {
    render() {
        return(
            <View style={styles.space}>
            </View>
        )
    }
}

class HeaderView extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Image style={styles.headerImage}></Image>
                <Text>123</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    space:{
        backgroundColor: '#efeff4',
        flex:1,
        height:15,
    },
    header:{
        backgroundColor: 'white',
        flex:1,
        height:125,
    },
    headerImage:{
        backgroundColor: 'black',
        alignItems:'center',
        width:100,
        left: 24,
        flex:1,
    },
    headerTitle:{
        left:23,
        alignItems:'center',
        flex:1,
        width:100,
    }
});

