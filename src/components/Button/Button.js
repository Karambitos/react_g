import { Component } from 'react'
// import styles from '../Button/Button.module.css';

export class Button extends Component {

    render() {
        return (
            <button onClick={this.props.onClick}>
                {this.props.children}
            </button>
        )
    }
}