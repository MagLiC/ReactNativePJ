/**
 * Created by lichao on 2019/3/8.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    Image,
    StyleSheet,
    Linking,
} from 'react-native'

let Dimensions = require('Dimensions');
let width = Dimensions.get('window').width;
let heigt = Dimensions.get('window').height;

export default class AppsPage extends Component {
    render() {
        return (
            <ScrollView>

                <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: width, height: 220 }} />
                <View style={styles.menuTtile}>
                    <Text>实用工具</Text>
                </View>
                <ToolsView />
                <View style={{ height: 10, backgroundColor: 'gray', }}></View>
                <View style={styles.menuTtile}>
                    <Text>便捷通道</Text>
                </View>
                <EasyEntranceView />
            </ScrollView>
        )
    }
}

class ToolsView extends Component {
    render() {
        return (
            <View style={styles.toolBox} >
                <ToolsButton url={'calshow:'}  text="日程安排"/>
                <ToolsButton url={'mobilenotes:'}  text="个人纪要"/>
                <ToolsButton url={'http://www.reactnative.vip'}  text="公众号"/>
                <ToolsButton url={'http://www.reactnative.vip'}  text="计算器"/>
                <ToolsButton url={'mailto:admin@abt.com'}  text="电子邮件"/>
            </View>
        )
    }
}

class EasyEntranceView extends Component {
    render() {
        return (
            <View style={styles.toolBox} >
                <CustomButton url={'http://www.reactnative.vip'}  text="海淀教师研修网"/>
                <CustomButton url={'http://www.reactnative.vip'}  text="心理服务系统"/>
                <CustomButton url={'http://www.reactnative.vip'}  text="中关村中学选课平台"/>
                <CustomButton url={'http://www.reactnative.vip'}  text="云录播课程"/>
                <CustomButton url={'http://www.reactnative.vip'}  text="数字资源云服务平台"/>
                <CustomButton url={'http://www.reactnative.vip'}  text="海淀教工委教委行政办公网"/>
            </View>
        )
    }
}

class CustomButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableHighlight
                onPress={() => Linking.canOpenURL(this.props.url).then(supported => {
                    if (supported) {
                        Linking.openURL(this.props.url);
                    } else {
                        console.log('无法打开该URI: ' + this.props.url);
                    }
                })}>
                <View style={styles.easyEntrance}>
                    <Image style={styles.easyEntranceImage}></Image>
                    <View style={styles.easyEntranceTitle}>
                        <Text >{this.props.text}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

class ToolsButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableHighlight
                onPress={() => Linking.canOpenURL(this.props.url).then(supported => {
                    if (supported) {
                        Linking.openURL(this.props.url);
                    } else {
                        console.log('无法打开该URI: ' + this.props.url);
                    }
                })}>
                <View style={styles.tool}>
                    <Image style={styles.toolImage}></Image>
                    <View style={styles.toolTitle}>
                        <Text >{this.props.text}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}


const styles = StyleSheet.create({
    menuTtile: {
        height: 30,
        paddingLeft: 10,
        marginTop: 10
    },
    toolBox: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    tool: {
        width: width * 0.25,
        flexDirection: 'column',
    },

    toolImage: {
        backgroundColor: 'red',
        height: 100,
        width: width * 0.25 - 20,
        marginLeft: 10,
        marginRight: 10,

    },
    toolTitle: {
        height: 30,
        width: width * 0.25,
        justifyContent: 'center',
        alignItems: "center",
    },

    easyEntrance: {
        height: 50,
        flexDirection: 'row',
        margin: 10,
    },

    easyEntranceImage: {
        backgroundColor: 'red',
        height: 50,
        width: 70,
    },
    easyEntranceTitle: {
        height: 20,
        justifyContent: 'center',
        alignItems: "center",
    },
    button: {
        margin: 5,
        backgroundColor: 'yellow',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
    buttonText: {
        fontSize: 20,
    },

});

