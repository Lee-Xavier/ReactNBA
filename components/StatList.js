import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import StatItem from './StatItem';
const styles = require('../styles.js')

/**
 * This class is a component that displays a list of players. 
 * It uses a Flat List interface that allows
 * 1. Scrolling
 * 2. Pull to Refresh
 * 3. Fully Cross Platform
 * and more. 
 * 
 * _prop   stats             array       Stores a collection of all the players
 * _func   onItemPress       function    Handles the event of a user selecting a player on press
 */

export default class StatList extends React.Component {

static propTypes = {
    stats: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired,
  };

render() {
    return(
    <View style={styles.listview}>
    <FlatList
          data={this.props.stats}
          renderItem={({ item }) => (
              <StatItem stat={item} onPress={this.props.onItemPress} />
              )}
        />
       </View>
    );
  }
}