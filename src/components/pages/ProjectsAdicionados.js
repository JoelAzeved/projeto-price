import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Message from '../layout/Mensagem'
import Loadind from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

import styles from './Projectsadicionados.module.css'



function ProjectsAdicionados() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let mensagem = ''
    if (location.state) {
        mensagem = location.state.mensagem
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects'
                , {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                    }
                })
                .then(resp => resp.json())
                .then((data) => {
                    setProjects(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 300)
    }, [])

    function removeProject(id) {
        setProjectMessage('')

        fetch(`http://localhost:5000/projects/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        })
        .then(resp => resp.json())
        .then(() => {
            setProjects(projects.filter((project)=> project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')

        } )
        .catch(err => console.log(err))

    }

    return (
        <div className={styles.project_container} >
            <div className={styles.title_container} >
                <h1>Projetos</h1>
                <LinkButton to='/projetos' text='Criar projetos' />
            </div>
            {mensagem && <Message type="sucess" msg={mensagem} />}
            {projectMessage && <Message type="error" msg={projectMessage} />}
                <div className={styles.container}>
                    {projects.length > 0 && projects.map((project)=>(
                    
                        <ProjectCard
                    
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            handleRemove={removeProject}
                            key={project.id}
                            id={project.id}
                    
                        />
                    ))}
                    {!removeLoading && <Loadind />}
                    {removeLoading && projects.length === 0 &&
                        <p> Não há projetos cadastrados</p>
                    }
                </div>
           
        </div>
    )
}

export default ProjectsAdicionados