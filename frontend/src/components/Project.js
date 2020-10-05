import React, { Component } from 'react'
// import ProjectLoading from '../components/ProjectLoading'
import ProjectItem from './ProjectItem'



class Project extends Component {

    openProject = () => {
        const openProjects = document.querySelector('#projects');
        let body = document.querySelector('body');
        if (openProjects.textContent.toLowerCase() !== 'see my projects') {
            openProjects.textContent = 'see my projects';
        }else{
            openProjects.textContent = 'close projects'
        }
        body.classList.toggle('make-projects-visible');
    }

    render() {
        const { projects } = this.props
        const projectComponents = projects.map((project) => {
            return ( 
                <ProjectItem project={project} maxLength={70} key={project.id} />
            )
        })
        return (
            <>
            <section className="open-projects">
                <div className="container">
                    <button onClick={this.openProject} id="projects" className="btn btn-link" >see my projects</button>
                </div>
            </section>
            <section className="project-section">
                    <div className="container">
                        <h3 className="project-head">Live Projects</h3>
                        <div className='project-grid'>
                            {projectComponents}
                        </div>
                    </div>
            </section>
            </>
        )
    }
}

export default Project
