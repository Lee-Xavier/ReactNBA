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

/**
 * This class is a component that represents a player as "[Player Name], [Team]". 
 * It uses Touchable Opacity wrapper over the view to handle a "(Player) Select" touch event.
 * 
 * _prop   stats            array       Stores a collection of all players
 * _func   onPress          function    Handles the event of a user selecting a player on press
 * _func   handlePress      function    Handles the event of a user selecting a player on press
 */

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
