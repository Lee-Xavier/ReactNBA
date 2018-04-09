'use strict';
import React, { Component } from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const { StyleSheet, Text, View } = ReactNative;

/**
 * This class is a component that represents the status bar for the app.
 * The status bar displays the "React NBA" title at the top of the screen.
 */

class StatusBar extends Component {
  render() {
    return (
      <View>
        <View style={styles.statusbar} />
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

module.exports = StatusBar;
