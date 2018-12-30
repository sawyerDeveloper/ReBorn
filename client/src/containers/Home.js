import React, { Component } from 'react'
import StyleGuide from '../StyleGuide'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {

        const styles = {
            container: {
                width: '100%',
                height: '100%'
            },
            header: {
                color: StyleGuide.pallette.grey,
                fontWeight: StyleGuide.font.weight.regular,
                fontSize: 48,
                marginTop: 20,
                marginBottom: 20,
                marginLeft: 45
            },
            content: {
                borderBottomLeftRadius: 10,
                marginLeft: 112,
                paddingTop: 20,
                paddingLeft: 25,
                paddingBottom: 20,
                color: StyleGuide.pallette.grey,
                backgroundColor: StyleGuide.pallette.maude,
                fontSize: 20
            }
        }

        return (
            <div style={styles.container}>
                <div style={styles.header}>ReBorn Framework</div>
                <div style={styles.content}>
                    A Paradigm Shift in the way we think about coding for the web.
                </div>
            </div>
        )
    }
}

export default Home
