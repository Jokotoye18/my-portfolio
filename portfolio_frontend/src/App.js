import React, { Component,  Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import axios from 'axios'


import Header from './components/header/Header';
import HeaderImage from './components/header/HeaderImage'
import AboutSection from './components/AboutSection'
import Project from './components/Project';
import Footer from './components/footer/Footer'
import ProjectLoading from './components/ProjectLoading'
import Certification from './components/certification/Certification'
import Contact from './components/contact/Index'
import Signup from './components/Signup'
import Login from './components/Login'

import  './base.css';


class App extends Component {
  state = {
    projects: [],
    loaded: false,
  }
  

  // componentDidMount() {
  //   axios.get('api/portfolio-list/')
  //     .then(response => this.setState({projects: response.data, loaded: true}))
  //     .catch(err => {
  //       alert(err.message)
  //     })
  // }

  render() {
    return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' render={props => {
          return <>
          <HeaderImage />
          <main>
            <AboutSection />
            {!this.state.loaded? <ProjectLoading />: <Project projects={this.state.projects} />}
            <Certification />
            <Contact />
          </main>
          <Footer />
          </>
        }}></Route>
        <Route path='/signup' component={Signup}></Route>
        <Route path='/login' component={Login}></Route>
      </Switch>
    </BrowserRouter>
    )
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

  }
}

export default App
