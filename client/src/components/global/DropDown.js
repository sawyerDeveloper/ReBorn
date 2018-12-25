import React, { Component } from 'react'
import StyleGuide from '../../StyleGuide'

class DropDown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentButton: props.currentContainer,
            open: false
        }
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    selectButton = (event) => {
        if (this.state.open) {
            this.props.clickHandler(event)
        }
        this.toggle()
    }

    render() {

        const styles = {
            container: {
                display: 'flex',
                flexDirection: 'column',
                width: 200,
                height: '100%',
                top: 0,
                backgroundColor: StyleGuide.pallette.dropDownBackground,
                zIndex: this.state.open ? 100 : 0
            },
            button: {
                display: 'flex',
                height: '100%',
                margin: 'auto',
                minHeight: 60,
                backgroundColor: StyleGuide.pallette.dropDownBackground
            },
            buttonLabel: {
                margin: 'auto',
                pointerEvents: 'none',
                fontSize: 24
            }
        }

        let component
        if (this.state.open) {
            component = (<div>
                {this.props.buttons.map((button) => {
                    return <div id={button} style={styles.button} key={button} onClick={this.selectButton}><div style={styles.buttonLabel}>{button}</div></div>
                })}
            </div>)
        } else {
            component = <div style={styles.button} onClick={this.selectButton}><div style={styles.buttonLabel}>{this.props.currentContainer}</div></div>
        }

        return (<div style={styles.container}>
            {component}
        </div>)
    }
}

export default DropDown