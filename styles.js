const React = require('react-native')
const { StyleSheet } = React
const constants = {
    actionColor: '#24CE84'
};

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    header: {
        fontSize: 40,
    },
    listview: {
        flex: 1,
        backgroundColor: '#eee',
        width: '100%',
    },
    li: {
        backgroundColor: 'ghostwhite',
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
    },
    liContainer: {
        borderColor: '#0d0d0d',
        borderWidth: 1,
        flex: 2,
    },
    liText: {
        color: 'black',
        fontSize: 17,
        fontFamily: 'Helvetica',
        fontWeight: "400"
    },
    liSubText: {
        fontStyle: 'italic',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        backgroundColor: '#e6e6e6',
    },
    aside1: {
        flex: 2,
    },
    aside2: {
        flex: 2,
    },
    asideTextLeft: {
        fontSize: 15,
        paddingLeft: 5,
        paddingBottom: 9,
        paddingTop: 6,
        borderWidth: 1,
        borderColor: '#0d0d0d',
    },
    asideTextRight: {
        fontSize: 15,
        paddingLeft: 5,
        paddingTop: 6,
        paddingBottom: 9,
        borderWidth: 1,
        borderColor: '#0d0d0d',
    },
    navbar: {
        alignItems: 'center',
        backgroundColor: '#2c59a0',
        borderColor: 'transparent',
        borderWidth: 1,
        justifyContent: 'center',
        height: 70,
        flexDirection: 'row',
        width: '100%',
    },
    navbarTitle: {
        color: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        fontWeight: "700",
        textAlign: 'center',
    },
    statusbar: {
        backgroundColor: 'lightgrey',
        height: 22,
    },
    center: {
        textAlign: 'center',
    },
    actionText: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: "600"
    },
    action: {
        backgroundColor: constants.actionColor,
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: '50%',
        paddingRight: '50%',
        paddingTop: 2,
        paddingBottom: 5,
    },
    avatar: {
        width: 210,
        height: 210,
        borderRadius: 105,
        marginBottom: 5,
        marginTop: 5,
        borderColor: '#0d0d0d',
        borderWidth: 2,
    },
})

module.exports = styles
module.exports.constants = constants;
