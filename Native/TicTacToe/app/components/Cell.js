import React, {
        TouchableHighlight,
        Text
} from 'react-native';

import styles from '../styles';

export default class Cell extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.cell}
                underlayColor={'rgba(255,255,255,.25)'}
                onPress={() => this.props.onPress()}>
                <Text style={styles.cellText}>
                    {this._renderPlayer(this.props.cell)}
                </Text>
            </TouchableHighlight>
        );
    }

    _renderPlayer(player) {
        if (player == null) {
            return;
        }

        return player ? 'X' : 'O';
    }
};
