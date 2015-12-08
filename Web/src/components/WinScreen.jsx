'use strict';

import './WinScreen.scss';

import React from 'react';

export default class WinScreen extends React.Component {
    render() {
        return (
            <div className="WinScreen-wrapper">
                Player {this.props.winner}, you win money!
            </div>
        )
    }
}
