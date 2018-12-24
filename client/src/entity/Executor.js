/*

TODO Implement this after pushing it to github!!!!!!

this.executor = new Executor()
requestAnimationFrame(this.loop)
  loop = () => {
    this.executor.execute()
    requestAnimationFrame(this.loop)
  }
  */

class Executor {

    constructor() {
        this.nodes = []
    }

    execute = () => {

    }


    deleteNode = (container) => {
        delete this.nodes[container]
    }

    setNode = (container, data) =>{
        this.nodes[container] = data
        return data
    }

    getNode = (container) => {
        return this.nodes[container] ? this.nodes[container] : null
    }

}

export default Executor

