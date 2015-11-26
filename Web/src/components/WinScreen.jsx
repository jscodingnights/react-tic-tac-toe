'use strict';

import './WinScreen.scss';

import React from 'react';

export default class WinScreen extends React.Component {
    render() {
        return (
            <div className="WinScreen-wrapper">
                A winrar is you, player {this.props.winner}!
            </div>
        )
    }
}
