import React, { Component } from 'react'
import StyleGuide from '../../StyleGuide'
import DropDown from './DropDown'

class Header extends Component {

    render() {

        if(!this.props.buttons){
            return null
        }
        const styles = {
            container: {
                width: '100%',
                height: 60,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: StyleGuide.pallette.green,
                color: StyleGuide.pallette.grey,
            },
            button: {
                width: this.props.width / this.props.buttons.length,
                height: '100%',
                display: 'flex'
            },
            buttonLabel: {
                fontSize: 28,
                margin: 'auto',
                pointerEvents: 'none'
            },
            home: {
                height: '100%',
                width: 150,
                display: 'flex',
                backgroundColor: StyleGuide.pallette.maude,
                borderBottomLeftRadius: 10,
            },
            homeLabel: {
                fontSize: 28,
                margin: 'auto',
                pointerEvents: 'none'
            }

        }

        return (
            <div style={styles.container}>
                <div id="Home" onClick={this.props.clickHandler} style={styles.home}>
                    <div style={styles.homeLabel}>
                        ReB
                    </div>
                </div>
                <DropDown buttons={this.props.buttons} clickHandler={this.props.clickHandler} currentContainer={this.props.currentContainer}/>
            </div>
        )
    }
}
export default Header