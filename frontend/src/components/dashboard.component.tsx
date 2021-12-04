
import React, { Component } from "react";
import PostData from "../types/post.type";
import postService from "../services/post.service";
import { Link } from "react-router-dom";
type Props = {};
type State = {
    blogs: Array<PostData>,
    limit: number,
    pageCount: number,
}

export default class DashboardComponent extends Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.getPage = this.getPage.bind(this);
        this.state = {
            blogs: [],
            limit: 6,
            pageCount: 1
        };
    }
    componentDidMount() {
        let { pageCount } = this.state
        this.getBlogs(pageCount);
    }
    getBlogs(pageCount:number) {
        const searchData = { limit:this.state.limit, pageCount }
        debugger
        postService.getBlogList(searchData)
            .then((response: any) => {
                this.setState({
                    blogs: response.data.data
                });
                console.log(this.state.blogs);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    getPage(option: string) {
        let {limit, pageCount } = this.state
        debugger
        if (option === 'PREV' && pageCount > 1) {
            --pageCount
            this.setState({
                pageCount: pageCount
            });
            this.getBlogs(pageCount);
        } else if (option === 'PREV' && pageCount == 1) {
            this.getBlogs(pageCount);
        } else if (option === 'NEXT') {
            ++pageCount
            this.setState({
                pageCount: pageCount
            });
            this.getBlogs(pageCount);
        }
    }
    render() {
        const { blogs, pageCount } = this.state;
        return (
            <div>
                <h4>Blogs</h4>
                <button onClick={() => this.getPage('PREV')} className="btn btn-success" style={{ display: (pageCount > 1 ? 'block' : 'none') }}>
                    Prev Page
            </button>
                <button onClick={() => this.getPage('NEXT')} className="btn btn-success">
                    Next Page
            </button>
                {blogs.map((blog, i) =>
                    <div className="col-md-6" key={i}>
                        {blogs.length > 0 ? (
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
                                    to={"/blog/" + blog._id}
                                    className="badge badge-warning"
                                >
                                    View
                            </Link>
                            </div>


                        ) : (
                            <div>
                                <br />
                                <p>Blogs not found!</p>
                            </div>
                        )}
                    </div>

                )}

            </div>
        )
    }
}