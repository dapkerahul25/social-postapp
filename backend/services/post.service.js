const PostModel = require('./../models/post.model')

exports.insertPost = async (postData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const post = new PostModel({
                title: postData.title,
                description: postData.description
            })
            const result = await post.save()
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

exports.findAllPost = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await PostModel.find()
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}