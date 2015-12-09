import React, {
    AppRegistry
} from 'react-native';

import App from './app/components/App';

class TicTacToe extends React.Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('TicTacToe', () => TicTacToe);
