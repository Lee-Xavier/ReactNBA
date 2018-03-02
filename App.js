/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ajax from './services/ajax';
import StatList from './components/StatList';
import StatDetail from './components/StatDetail';
import StatusBar from './components/StatusBar';
// import {YellowBox} from 'react-native';

// YellowBox.ignoreWarnings(['Warning: ...']);

const styles = require('./styles.js')

export default class App extends React.Component {
  state = {
    stats: [],
    currentStatName: null,
  };

  async componentDidMount() {
    const stats = await ajax.fetchInitialStats();
    this.setState({ stats });
    console.log("App.js \n\n" + this.state.stats);
  }
  setCurrentStat = (currentStatName) => {
    this.setState({
      currentStatName: currentStatName,
    });
  };
  unsetCurrentStatName = () => {
    this.setState({
      currentStatName: null,
    });
  };
  currentStat = () => {
    var result = this.state.stats.find((stat) => stat.name === this.state.currentStatName);
    return result;
  };

  render() {
    if (this.state.currentStatName) {
      return (
        <View style={styles.container}>
          <StatusBar title="React NBA" />
          <StatDetail initialStatData={this.currentStat()} onBack={this.unsetCurrentStatName} />
        </View>
      )
    }

    if (this.state.stats.length > 0) {
      return (
        <View style={styles.container}>
          <StatusBar title="React NBA" />
          <StatList stats={this.state.stats} onItemPress={this.setCurrentStat} />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Starting App..
        </Text>
      </View>
    );
  }
}
