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

export default class StatList extends React.Component {

static propTypes = {
    stats: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired,
  };

render() {
    console.log("StatList hit: \n" + this.props.stats);
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