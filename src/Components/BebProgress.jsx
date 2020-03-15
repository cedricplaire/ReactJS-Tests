import React, { Component } from 'react';

class BebProgress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            min: 0,
            max: 100,
            step: 1,
            percent: 0,
        };

        const { minP, maxP, stepP } = this.props;
        setupProgress(minP, maxP, stepP);

        this.handleProgress = this.handleProgress.bind(this);
    }

    setupProgress(min, max, step) {
        this.setState({
            min: min,
            max: max,
            step: step,
        });
    }

    handleProgress(event) {
        if (this.state.percent >= this.state.max) return;
        this.setState({ percent: this.state.percent + step });
    }

    render() {
        return (
            <div className={progressStyle}>
                <progress max={this.state.max} value={this.state.percent}>
                    {this.state.percent} %
                </progress>
            </div>
        );
    }
}
