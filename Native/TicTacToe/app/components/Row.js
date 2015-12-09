import React, {
    View
} from 'react-native';

import styles from '../styles';
import Cell from './Cell';

export default class Row extends React.Component {
  render() {
    return (
      <View style={styles.row}>
        {this.props.row.map((cell, index) => {
            return (
                <Cell
                    onPress={() => this.props.onPress(index)}
                    cell={cell} />
            );
        })}
      </View>
    );
  }
};
