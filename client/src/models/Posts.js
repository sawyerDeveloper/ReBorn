class Posts {


    /**
     * @constructor
     * @param {*} api 
     */
    constructor(api) {
        this.api = api

        //Just for convenience
        this.name = this.constructor.name 
    }

    /**
     * @function deleteData
     * 
     * Wraps its composite function in Api.
     * This removes the data model's data from the single source of truth if the data is only needed for 
     * the Posts container and there isn't a good business reason to persist the data.
     * This function should be placed within componentWillUnmount
     */
    deleteData = () => {
        this.api.deleteData(this.name)
    }

    /**
     * getPosts
     * 
     * Contextual method that ties into the specific business logic for the Posts container.
     */
    getPosts = (callback) => {
        this.api.apiGet('/api/posts/', this.name, (posts) => {

            //NOTE: Mutate data here once - not within a react component class.
            //We are loading this data fresh each time we load the conatiner so we do this mutation on new data.
            posts.sort((a, b) => {
                const aDate = new Date(a.posted).getTime()
                const bDate = new Date(b.posted).getTime()
                return aDate - bDate
            })
            callback(posts)
        })
    }



}

export default Posts