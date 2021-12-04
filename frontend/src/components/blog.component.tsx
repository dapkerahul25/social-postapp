

import React, { Component } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import postService from "../services/post.service";
type State = {
    blog:any
}
interface RouterProps { // type for `match.params`
    id: string; // must be type `string` since value comes from the URL
  }
  
  type Props = RouteComponentProps<RouterProps>;
export default class BlogComponent extends Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            blog: null,
        };
    }
    componentDidMount() {
        this.getBlogs(this.props.match.params.id);
    }
    getBlogs(_id:string) {
        postService.getBlogById(_id)
            .then((response: any) => {
                debugger
                this.setState({
                    blog: response.data.data
                });
                console.log(this.state.blog);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }
    render() {
        const { blog } = this.state;
        return (
            <div>
                <h4>Blogs</h4>
                    <div className="col-md-6">
                        {blog? (
                            <div>
                                
                                <div>
                                    <label>
                                        <strong>Title:</strong>
                                    </label>{" "}
                                    {blog.title}
                                </div>
                                <div>
                                    <label>
                                        <strong>Description:</strong>
                                    </label>{" "}
                                    {blog.description}
                                </div>

                                <Link
                                    to={"/homepage"}
                                    className="badge badge-warning"
                                >
                                    Bact to Homepage
                            </Link>
                            </div>


                        ) : (
                            <div>
                                <br />
                                <p>Blog not found!</p>
                            </div>
                        )}
                    </div>


            </div>
        )
    }
}