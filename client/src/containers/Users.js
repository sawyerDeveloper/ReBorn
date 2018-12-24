import React, { Component } from 'react'
import User from '../components/users/User'
import Model from '../models/Users'
import StyleGuide from '../StyleGuide'

class Users extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }

        this.model = new Model(props.api)

    }

    componentDidMount() {
        this.model.getUsers((users) => { this.setState({ users }) })
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
                fontSize: 24,
                marginTop: 20,
                marginBottom: 20
            },
            content: {
                color: StyleGuide.pallette.grey
            }
        }

        return (
            <div style={styles.container}>
                <div style={styles.header}>USERS:</div>
                <div style={styles.content}>
                    {this.state.users &&
                        this.state.users.map((user) => {
                            return (<User user={user} key={user._id} />)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Users
