import React, {useState} from 'react'


const ProjectItem = ({project, maxLength}) => {
    const [hidden, setHidden] = useState(false)
    const {   } = project
    return (
         <article className='project'>
            <img  className="project-image" src={project.image} alt={project.image.name} />
            <h3 className="p-3">{ project.title }</h3>
            <p className="p-3 project-description">{ project.description }</p>
            <div className='project-links p-3'>
                <a className="btn btn-link"  href={ project.url }>See Live</a>
                <a className="btn btn-link"  href={ project.source }>Source</a>
            </div>
        </article>
    )
}

export default ProjectItem;