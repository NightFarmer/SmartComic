import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';

import MainTabBar from './MainTabBar'

import Home from './Home'
import Weekly from './Weekly'
import BookShelf from './BookShelf'

export default () => {
    return <ScrollableTabView
        style={{marginTop: 20, }}
        renderTabBar={() => <MainTabBar/>}
        tabBarPosition='bottom'
        locked={true}
        scrollWithoutAnimation={true}
    >
        <Home tabLabel={{'title': '首页'}}/>
        <Weekly tabLabel={{'title': '更新'}}/>
        <BookShelf tabLabel={{'title': '书架'}}/>
    </ScrollableTabView>;
}
