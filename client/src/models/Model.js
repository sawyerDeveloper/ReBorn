import axios from 'axios'

class Model {

    /**
     * Creates the single data structure all data will be assigned to as the app is in memory. 
     * @constructor
     */
    constructor() {
        this.data = {}
    }

    /**
     * Handles GET method calls to the API endpoint set in the route param.
     * Saves the data from the results into the data object named by the container param.
     * @method apiGet
     * @param {string} route
     * @param {string} container
     * @param {function} callback
     */
    apiGet = (route, container, callback) => {

        axios.get(route)
            .then((response) => {
                this.setData(container, response.data)
                callback(this.getData(container))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    apiPost = (route, body, callback) => {

        axios.post(route, body)
            .then((response) => {
                callback(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    apiPut = (route, body, callback) => {
        axios.post(route, body)
            .then((response) => {
                callback(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    apiDelete = (route, callback) => {
        axios.delete(route)
            .then((response) => {
                callback(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    deleteData = (container) => {
        delete this.data[container]
    }

    setData = (container, data) =>{
        this.data[container] = data
        return data
    }

    getData = (container) => {
        return this.data[container] ? this.data[container] : null
    }

}

export default Model

