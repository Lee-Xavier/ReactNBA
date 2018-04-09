/**
 * Project: React NBA Application (RNA)
 * Purpose: This app allows users to scroll through a collection of NBA players,
 *          and concisely view their basic information and statistics.
 * Author: Xavier Lee
 * Created: March 8th, 2018
 * Version: 1.0
 * Github Link: https://github.com/Lee-Xavier/ReactNBA
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
const styles = require('./styles.js')

/**
 * This class is the main component for the app. It displays 3 types of views:
 * 1. Loading View      When data is still being fetched over AJAX call
 * 2. List View         When data is fetched but no player has been selected
 * 3. Detail View       When data is fetched and a player has been selected
 * 
 * _prop   state                object      Stores properties that hold temporary states
 * _prop   stats                array       Stores a collection of all the players
 * _prop   currentStatName      string      Stores a name of the selected player
 * _func   componentDidMount    function    Attempts to initialize the "stats" array
 * _func   setCurrentStat       function    Sets the "currentStatName" property with a player name
 * _func   unsetCurrentStatName function    Unsets the "currentStatName" property with null
 * _func   currentStat          function    Returns the statistics for a particular player
 */

export default class App extends React.Component {
  state = {
    stats: [],
    currentStatName: null,
  };

  async componentDidMount() {
    const stats = await ajax.fetchInitialStats();
    this.setState({ stats });
  }

  setCurrentStat = (currStatName) => {
    this.setState({
      currentStatName: currStatName,
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
