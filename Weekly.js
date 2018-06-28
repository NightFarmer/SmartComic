import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';
import WeeklyTabBar from './WeeklyTabBar'


const DayList = [{
    title: '周一'
}, {
    title: '周二'
}, {
    title: '周三'
}, {
    title: '周四'
}, {
    title: '周五'
}, {
    title: '周六'
}, {
    title: '周日'
}];

export default () => {
    return <ScrollableTabView
        contentProps={{bounces: false}}
        initialPage={1}
        renderTabBar={() => <WeeklyTabBar/>}
        tabBarBackgroundColor={'#ff625e'}
        tabBarActiveTextColor={'#ff625e'}
        tabBarInactiveTextColor={'#FFFFFF'}
        tabBarTextStyle={{fontSize: 13}}
    >
        {DayList.map((it, index) =>
            <Text tabLabel={it} key={index}>My</Text>
        )}
    </ScrollableTabView>;
}
