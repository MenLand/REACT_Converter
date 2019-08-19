import React from 'react';

export default class Converter extends React.Component {
    render() {
        return (
            <div className="money-convert">
                <div className="money-convert__wrapper">
                    <div className="money-convert__inputs">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}