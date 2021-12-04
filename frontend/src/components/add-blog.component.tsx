

import { ChangeEvent, Component } from "react";
import postService from "../services/post.service";
import PostData from "../types/post.type";
type Props = {};


type State = PostData & {
  submitted: boolean
};

export default class AddBlogComponent extends Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
       
        this.createBlog = this.createBlog.bind(this);
        this.newBlog = this.newBlog.bind(this);
    
       
    
        this.state = {
          _id: null,
          title: "",
          description:'',
          submitted: false
        };
      }
    
      createBlog() {
        const data: PostData = {
            title: this.state.title,
            description: this.state.description
    
        };
        postService.createBlog(data)
          .then((response: any) => {
            this.setState({
              _id: response.data._id,
              title: response.data.title,
              description: response.data.description,
              submitted: true,
            });
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      }
    
      newBlog() {
        this.setState({
          _id: null,
          title: "",
          description:'',
          submitted: false
        })
      }
    
      onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
          title: event.target.value
        });
      }
    
      onChangeDescription(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
          description: event.target.value
        });
      }
    
    
     
   
  render() {
    const { title,description, submitted} = this.state

    return (
      <div className="submit-form">

        {submitted ? (<div>
          <h4>Blog posted successfully!</h4>
          <button className="btn btn-success" onClick={this.newBlog}>
            Create Post
          </button>
        </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
          <button onClick={this.createBlog} className="btn btn-success">
              Create a Post
            </button>
          </div>)}
      </div>
    );
  }
}