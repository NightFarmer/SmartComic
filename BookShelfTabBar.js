const React = require('react');
const {ViewPropTypes} = ReactNative = require('react-native');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');
const {
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableWithoutFeedback,
    Dimensions,
} = ReactNative;

const TabBarWidth = Dimensions.get('window').width / 2;


const DefaultTabBar = createReactClass({
    propTypes: {
        goToPage: PropTypes.func,
        activeTab: PropTypes.number,
        tabs: PropTypes.array,
        backgroundColor: PropTypes.string,
        activeTextColor: PropTypes.string,
        inactiveTextColor: PropTypes.string,
        textStyle: Text.propTypes.style,
        tabStyle: ViewPropTypes.style,
        renderTab: PropTypes.func,
        underlineStyle: ViewPropTypes.style,
    },

    getInitialState() {
        return {
            _leftTabUnderline: new Animated.Value(0),
        };
    },

    componentDidMount() {
        this.props.scrollValue.addListener(this.updateView);
        this.updateView({})
    },

    updateView(offset) {
        let index = offset.value === undefined ? this.props.activeTab : offset.value;
        const position = Math.floor(index);
        const pageOffset = index % 1;
        const tabCount = this.props.tabs.length;
        const lastTabPosition = tabCount - 1;

        if (tabCount === 0 || index < 0 || index > lastTabPosition) {
            return;
        }
        let tabWidth = TabBarWidth / tabCount;
        this.state._leftTabUnderline.setValue(position * tabWidth + pageOffset * tabWidth + TabBarWidth / tabCount * 0.25);
    },

    renderTab(item, page, isTabActive, onPressHandler) {
        const {activeTextColor, inactiveTextColor, textStyle,} = this.props;
        const textColor = isTabActive ? activeTextColor : inactiveTextColor;

        return <TouchableWithoutFeedback
            style={{flex: 1,}}
            key={item.title}
            onPress={() => onPressHandler(page)}
        >
            <View style={[styles.tab, this.props.tabStyle,]}>
                <Text style={[{color: textColor,}, textStyle,]}>
                    {item.title}
                </Text>
            </View>
        </TouchableWithoutFeedback>;
    },

    render() {
        const containerWidth = this.props.containerWidth;
        const numberOfTabs = this.props.tabs.length;

        const tabUnderlineStyle = {
            position: 'absolute',
            height: 4,
            backgroundColor: 'white',
            borderRadius: 2,
            alignItems: 'center',
            alignSelf: 'center',
            width: TabBarWidth / numberOfTabs * 0.5,
            bottom: 2
        };

        const dynamicTabUnderline = {
            left: this.state._leftTabUnderline,
        };

        return (
            <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor,}, this.props.style,]}>
                <Animated.View style={[tabUnderlineStyle, dynamicTabUnderline]}/>
                <View style={styles.tabBar}>
                    {this.props.tabs.map((item, page) => {
                        const isTabActive = this.props.activeTab === page;
                        const renderTab = this.props.renderTab || this.renderTab;
                        return renderTab(item, page, isTabActive, this.props.goToPage);
                    })}
                </View>
            </View>
        );
    },
});

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabBar: {
        width: TabBarWidth,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        flexDirection: 'row'
    },
    tabs: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

module.exports = DefaultTabBar;
