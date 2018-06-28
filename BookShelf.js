import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';
import BookShelfTabBar from './BookShelfTabBar'

export default () => {
    return <ScrollableTabView
        contentProps={{bounces: false}}
        initialPage={1}
        renderTabBar={() => <BookShelfTabBar/>}
        tabBarBackgroundColor={'#ff625e'}
        tabBarActiveTextColor={'#FFFFFF'}
        tabBarInactiveTextColor={'#ffd6d3'}
        tabBarTextStyle={{fontSize: 16}}
    >
        <Text tabLabel={{title: '收藏'}}>My</Text>
        <Text tabLabel={{title: '历史'}}>favorite</Text>
        <Text tabLabel={{title: '缓存'}}>project</Text>
    </ScrollableTabView>;
}
