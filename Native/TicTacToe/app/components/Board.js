import React, {
    View
} from 'react-native';

import styles from '../styles';
import Row from './Row';

export default class Board extends React.Component {
    render() {
        return (
            <View style={styles.board}>
                {this.props.board.map((row, index) => {
                    return <Row
                        key={index}
                        row={row}
                        onPress={(col) => this.props.move(this.props.player, { row: index, col })} />
                })}
            </View>
        );
    }
}
