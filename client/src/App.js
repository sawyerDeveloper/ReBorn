import React, { Component } from 'react'
import Model from './models/Model'
import StyleGuide from './StyleGuide'
import Header from './components/global/Header'
import Users from './containers/Users'
import Posts from './containers/Posts'
import Home from './containers/Home'


export const containers = {
  USERS: 'USERS',
  POSTS: 'POSTS',
  HOME: 'HOME'
}
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentContainer: containers.HOME,
      width: window.innerWidth,
      height: window.innerHeight
    }

    this.model = new Model()
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
        container = <Posts model={this.model} />
        break
      case containers.USERS:
        container = <Users model={this.model} />
        break
      default:
        container = <Home />
        break
    }

    return (
      <div style={styles.container}>
        <Header currentContainer={this.state.currentContainer} 
                width={this.state.width} 
                clickHandler={this.setContainer} 
                height={this.state.height} 
                buttons={Object.values(containers)}/>
        <div style={styles.content}>
          {container}
        </div>
      </div>
    )
  }
}

export default App
