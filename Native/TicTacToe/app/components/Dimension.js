import React, {
    TextInput
} from 'react-native';

import styles from '../styles';

export default class Dimension extends React.Component {
    render() {
        return (
            <TextInput
                style={styles.dimension}
                blurOnSubmit={true}
                onChangeText={(dimension) => this.props.onChangeDimension(dimension)}
                value={this.props.dimension.toString()}
            />
        );
    }
}
