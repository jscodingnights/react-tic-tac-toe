import React, {
    TextInput,
    View,
    Text
} from 'react-native';

import styles from '../styles';
import game from '../game';

import GameResults from '../containers/GameResults';
import Dimension from '../containers/Dimension';
import Board from '../containers/Board';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Dimension />
                </View>
                <View style={styles.body}>
                    <Board />
                </View>
                <View style={styles.footer}>
                    <GameResults />
                </View>
            </View>
        );
    }
}
