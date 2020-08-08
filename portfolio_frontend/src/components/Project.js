import React, { Component } from 'react'
// import { Link } from 'react-router-dom'


class Project extends Component {
    render() {
        const { projects } = this.props
        const projectComponents = projects.map((project) => {
            return (
                <div key={project.id}>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <img src={project.image} alt={project.image.name} />
                    <a style={{display: 'block'}} href={project.hyper_url}>Detail</a>
                </div>
            )
        })
        return (
            <div>{projectComponents}</div>
        )
    }
}

export default Project
