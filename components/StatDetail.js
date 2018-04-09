import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import ajax from '../services/ajax';
const styles = require('../styles.js')

/**
 * This class is a component that displays a detailed view of a player in the form of a table. 
 * It attempts to fetch an image for the player, to be displayed along with other statistics.
 * It uses Touchable Opacity wrapper over the view to handle a "Back" touch event and
 * an Image component for displaying a player's headshot 
 * 
 * _prop   state              object        Stores properties that hold temporary states
 * _prop   stat               array         Stores the data of a player
 * _func   componentDidMount  function      Attempts to fetch a player's headshot image by using "[firstname]" and "[lastname]"
 * _func   onBack             function      Handles the event of going "Back" to the previous view
 */

export default class StatDetail extends React.Component {

    static propTypes = {
        initialStatData: PropTypes.object.isRequired,
        onBack: PropTypes.func.isRequired,
    };
    state = {
        stat: this.props.initialStatData,
        statImage: null,        
    };

    async componentDidMount() {
        var arrPlayerName = this.state.stat.name.split(" ");
        const statImage = await ajax.fetchStatDetailImage(arrPlayerName[0], arrPlayerName[1]);
        this.setState({
            stat: this.props.initialStatData,
            statImage
        });
    }

    render() {
        const { stat } = this.state.stat;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onBack}>
                    <View style={styles.action}>
                        <Text style={styles.actionText}>Back</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.wrapper}>
                    <View>
                        {this.state.statImage && (
                            <View>
                                <Image source={{ uri: this.state.statImage.url }} style={styles.avatar} />
                            </View>
                        )}
                    </View>

                    <View style={styles.main}>
                        <View style={styles.aside1}>
                            <Text style={styles.asideTextLeft}>Player Name</Text>
                            <Text style={styles.asideTextLeft}>Team Name</Text>
                            <Text style={styles.asideTextLeft}>Games Played</Text>
                            <Text style={styles.asideTextLeft}>Free Throw %</Text>
                            <Text style={styles.asideTextLeft}>Assists per Game</Text>
                            <Text style={styles.asideTextLeft}>Steals per Game</Text>
                            <Text style={styles.asideTextLeft}>Blocks per Game</Text>
                            <Text style={styles.asideTextLeft}>Turnover per Game</Text>
                            <Text style={styles.asideTextLeft}>Player Effiency</Text>
                        </View>

                        <View style={styles.aside2}>
                            <Text style={styles.asideTextRight}>{this.state.stat.name}</Text>
                            <Text style={styles.asideTextRight}>{this.state.stat.team_name}</Text>
                            <Text style={styles.asideTextRight}>{this.state.stat.games_played}</Text>
                            <Text style={styles.asideTextRight}>{this.state.stat.free_throw_percentage}</Text>
                            <Text style={styles.asideTextRight}>{this.state.stat.assists_per_game}</Text>
                            <Text style={styles.asideTextRight}>{this.state.stat.steals_per_game}</Text>
                            <Text style={styles.asideTextRight}>{this.state.stat.blocks_per_game}</Text>
                            <Text style={styles.asideTextRight}>{this.state.stat.turnovers_per_game}</Text>
                            <Text style={styles.asideTextRight}>{this.state.stat.player_efficiency_rating}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
