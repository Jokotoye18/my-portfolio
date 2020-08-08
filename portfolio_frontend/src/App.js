import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './components/Project'
import Header from './components/header/Header'


class App extends Component {
  state = {
    projects: []
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/portfolio-list/'); // fetching the data from api, before the page loaded
      const projects = await res.json();
      this.setState({
        projects
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <section>
          <Project projects={this.state.projects} />
        </section>
      </Fragment>
      
    )
  }
}

export default App
