import React, {
    AppRegistry
} from 'react-native';

import { Provider } from 'react-redux/native';
import App from './app/components/App';
import store from './app/store';

class TicTacToe extends React.Component {
    render() {
        return (
            <Provider store={store}>
                {() => <App />}
            </Provider>
        );
    }
}

AppRegistry.registerComponent('TicTacToe', () => TicTacToe);
