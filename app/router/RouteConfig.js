/**
 * Created by lichao on 2019/3/8.
 */

import AlumniPage from '../pages/alumni/AlumniPage'
import AppsPage from '../pages/apps/AppsPage'
import MyPage from '../pages/my/MyPage'
import NavPage from '../pages/nav/NavPage'
import MainTab from '../TabNavigator'

const RouteConfig = {
    MainTab:{
        screen: MainTab,
    },
    AlumniPage: {
        screen: AlumniPage,
    },
    AppsPage: {
        screen: AppsPage,
    },
    MyPage: {
        screen: MyPage,
    },
    NavPage: {
        screen: NavPage,
    },
};

export default RouteConfig;