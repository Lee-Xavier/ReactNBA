import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = require('../styles.js')

export default class StatItem extends React.Component {

    static propTypes = {
        stat: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired,
    };

    handlePress = () => {
        this.props.onPress(this.props.stat.name);
    };

    render() {
        const { stat } = this.props;
        console.log("StatItem Hit \n " + stat);
        return (
            <View>
                <TouchableOpacity onPress={this.handlePress}>
                    <View style={styles.liContainer}>
                        <View style={styles.li}>
                            <Text style={styles.liText}>{stat.name}, <Text style={styles.liSubText}>{stat.team_acronym.toUpperCase()}</Text></Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
