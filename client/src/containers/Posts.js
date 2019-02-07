import React, { Component } from 'react'
import Post from '../components/posts/Post'
import Model from '../models/Posts'
import StyleGuide from '../StyleGuide'

class Posts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }

        this.model = new Model(props.model)
    }

    componentDidMount() {
        this.model.getPosts((posts) => { this.setState({ posts }) })
    }

    componentWillUnmount() {
        this.model.deleteData()
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
                <div style={styles.header}>POSTS:</div>
                <div style={styles.content}>
                    {this.state.posts &&
                        this.state.posts.map((post) => {
                            return (<Post post={post} key={post._id} />)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Posts
