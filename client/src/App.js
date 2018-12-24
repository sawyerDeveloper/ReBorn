import React, { Component } from 'react'
import Api from './models/Api'
import StyleGuide from './StyleGuide'
import Header from './components/global/Header'
import Users from './containers/Users'
import Posts from './containers/Posts'
import Home from './containers/Home'


export const containers = {
  USERS: 'Users',
  POSTS: 'Posts',
  HOME: 'Home'
}
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentContainer: containers.HOME,
      width: window.innerWidth,
      height: window.innerHeight
    }

    this.api = new Api()
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  updateDimensions = (event) => {
    this.setState({
      width: event.target.innerWidth,
      height: event.target.innerHeight
    })
  }

  setContainer = (event) => {
    this.setState({
      currentContainer: event.target.id
    })
  }

  render() {

    const styles = {
      container: {
        height: this.state.height,
        width: this.state.width,
        fontFamily: StyleGuide.font.family,
        fontWeight: StyleGuide.font.weight.regular,
        backgroundColor: StyleGuide.pallette.background,
        position: 'fixed',
        top: 0,
        left: 0
      },
      content: {
        marginLeft: 20
      }
    }

    let container
    switch (this.state.currentContainer) {
      case containers.POSTS:
        container = <Posts api={this.api} />
        break
      case containers.USERS:
        container = <Users api={this.api} />
        break
      default:
        container = <Home />
        break
    }

    return (
      <div style={styles.container}>
        <Header currentContainer={this.state.currentContainer} width={this.state.width} clickHandler={this.setContainer} height={this.state.height}/>
        <div style={styles.content}>
          {container}
        </div>
      </div>
    )
  }
}

export default App
