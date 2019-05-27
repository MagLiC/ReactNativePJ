/**
 * Created by lichao on 2019/3/15.
 */
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import AlumniPage from './pages/alumni/AlumniPage'
import AppsPage from './pages/apps/AppsPage'
import NavPage from './pages/nav/NavPage'
import MyPage from './pages/my/MyPage'
import MyInfoPage  from './pages/my/MyInfoPage'

const AlumniNav = createStackNavigator({
    nav: AlumniPage,
});

const AppsPageNav = createStackNavigator({
    nav: AppsPage,
});

const NavPageNav = createStackNavigator({
    nav: NavPage,
});

const MyPageNav = createStackNavigator(
    {
        nav: MyPage,
        MyInfoPage:MyInfoPage,
    }
);

export default MainPage = createAppContainer(
    createBottomTabNavigator({
    Alumni: {
        screen: AlumniNav,
        navigationOptions:({navigation}) => ({
            tabBarLabel: '校友',
        }),
    },
    AppsPage: {
        screen: AppsPageNav,
        navigationOptions:({navigation}) => ({
            tabBarLabel: '应用',
        }),
    },
    NavPage: {
        screen: NavPageNav,
        navigationOptions:({navigation}) => ({
            tabBarLabel: '导航',
        }),
    },
    MyPage: {
        screen: MyPageNav,
        navigationOptions:({navigation}) => ({
            tabBarLabel: '我',
        }),
    },
},
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnable: false,
        lazy: true,
        initialRouteName: '',
        backBehavior: 'none',
        tabBarOptions: {
            activeTintColor: '#d81e06',
            inactiveTintColor: '#515151',
            labelStyle: {
                fontSize: 12,
            },
        }
    }
));
