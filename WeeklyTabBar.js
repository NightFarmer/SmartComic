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

const WINDOW_WIDTH = Dimensions.get('window').width;


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

    componentDidMount() {
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
        const tabCount = this.props.tabs.length;

        const tabUnderlineStyle = {
            position: 'absolute',
            height: 20,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
            alignSelf: 'center',
            width: WINDOW_WIDTH / tabCount * 0.7
        };

        const dynamicTabUnderline = {};
        let tabWidth = WINDOW_WIDTH / tabCount;
        let newLeft = this.props.activeTab * tabWidth + WINDOW_WIDTH / tabCount * 0.15;
        console.log(newLeft, this.props.activeTab, tabWidth, WINDOW_WIDTH / tabCount * 0.15);
        dynamicTabUnderline.left = newLeft;

        return (
            <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor,}, this.props.style,]}>
                <Animated.View style={[tabUnderlineStyle, dynamicTabUnderline]}/>
                {this.props.tabs.map((item, page) => {
                    const isTabActive = this.props.activeTab === page;
                    const renderTab = this.props.renderTab || this.renderTab;
                    return renderTab(item, page, isTabActive, this.props.goToPage);
                })}
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
    tabs: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

module.exports = DefaultTabBar;
