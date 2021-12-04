import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DashboardComponent from "./components/dashboard.component";
import AddBlogComponent from "./components/add-blog.component";
import BlogComponent from "./components/blog.component";


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/homepage"} className="navbar-brand">
            Social Blogs
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/create-post"} className="nav-link">
                Create a Post
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/homepage"]} component={DashboardComponent} />
            <Route exact path="/create-post" component={AddBlogComponent} />
            <Route exact path="/blog/:id" component={BlogComponent} />
           
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
