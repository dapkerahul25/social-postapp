const PostController = require('./../controllers/post.controller')

module.exports = (app) => {
    app.get('/', (req, res) => {
        try {
            return res.status(200).send({
                message: `Welcome to Social Post API`,
                statusCode: 200,
                status: true
            })
        } catch (error) {
            return res.status(500).send({
                message: `Internal Server Error!`,
                statusCode: 500,
                status: false,
                error
            })
        }

    })


    // Create Post 
    app.post('/post', PostController.createPost)

     // find all post 
     app.get('/post/list', PostController.findAllPost)
}