class Users {

    /**
     * @constructor
     * @param {Api} model 
     */
    constructor(model) {
        this.model = model

        //Just for convenience
        this.name = this.constructor.name 
    }

    /**
     * Contextual method that ties into the specific business logic for the Users container.
     * @method getUsers
     * @param {function} callback
     */
    getUsers = (callback) => {

        //This data we want to persist for whatever reason so we load it once and pull it from memory.
        const data = this.model.getData(this.name)

        //This data exists already - just return that. 
        if(data){
            callback(data)
            return
        }

        this.model.apiGet('/api/users/', this.name, (users) => {

            //mutate data here once and save it to the model - not within a react component class.
            callback(this.model.setData(this.name, users.reverse()))
        })
    }

}

export default Users