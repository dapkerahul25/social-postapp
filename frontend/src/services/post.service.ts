import http from "../http-common"
import PostData  from "../types/post.type"

class PostDataService {
    createBlog(data: PostData){
        return http.post<PostData>('/blog', data)
    }
    getBlogList(searchData:any){
        return http.post<PostData>('/blog/list',searchData)
    }

    getBlogById(_id:string){
        return http.get<PostData>(`/blogById/${_id}`)
    }
}
export default new PostDataService
