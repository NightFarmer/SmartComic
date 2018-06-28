import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';
import HomeTabBar from './HomeTabBar'

export default () => {
    return <View style={{flex: 1}}>
        <View>
            <Text>搜索栏</Text>
        </View>
        <ScrollableTabView
            contentProps={{bounces: false}}
            initialPage={1}
            renderTabBar={() => <HomeTabBar/>}
            tabBarBackgroundColor={'#ff625e'}
            tabBarActiveTextColor={'#FFFFFF'}
            tabBarInactiveTextColor={'#ffd6d3'}
            tabBarTextStyle={{fontSize: 16}}
        >
            <Text tabLabel='排行'>My</Text>
            <Text tabLabel='推荐'>favorite</Text>
            <Text tabLabel='大陆'>project</Text>
            <Text tabLabel='游戏'>favorite</Text>
            <Text tabLabel='穿越'>project</Text>
            <Text tabLabel='恋爱'>favorite</Text>
            <Text tabLabel='玄幻'>project</Text>
            <Text tabLabel='热血'>favorite</Text>
            <Text tabLabel='悬疑'>project</Text>
        </ScrollableTabView>
    </View>;
}
