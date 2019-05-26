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
    TouchableWithoutFeedback,
    TouchableHighlight,
} from 'react-native'

export default class MyPage extends React.Component {
    static navigationOptions = {
        title:'我',
        headerStyle:{backgroundColor:'#7bc6b4'},
        headerTitleStyle:{color:'white'},
    };
    _onPress = () => {
        this.props.navigation.push('MyInfoPage');
    }
    render() {
        return(
            <ScrollView>
                <SpaceView/>
                <HeaderView/>
                <SpaceView/>
                <TouchableWithoutFeedback 
                onPress={this._onPress}>
                <View>
                <CellView name='账号设置' />
                </View>
                </TouchableWithoutFeedback>
                <CellView name='基本信息' />
                <CellView name='扩展信息' />
                <CellView name='我的二维码' />
                <CellView name='关于' />
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
                <Text style={styles.headerTitle}>123</Text>
            </View>
        )
    }
}

class CellView extends Component {
    render() {
        return (
            <View style={styles.cell}>
                <Image style={styles.cellImage}></Image>
                <View style={styles.cellTitleContentView}>
                    <Text>{this.props.name}!</Text>
                </View>
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
        flexDirection: 'row',
        height:125,
        paddingLeft: 24,
        justifyContent: 'center',
    },
    headerImage:{
        backgroundColor: 'red',
        alignItems:'center',
        width:100,
    },
    headerTitle:{
        left:12,
        flex:1,
        lineHeight: 125,
        textAlignVertical: 'center',
    },
    cell:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        height:67,
    },
    cellImage:{
        backgroundColor:'blue',
        alignSelf: 'flex-start',
        width:60,
        height:60,
        marginLeft:10,
        marginTop: 3.5,
    },
    cellTitleContentView:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

