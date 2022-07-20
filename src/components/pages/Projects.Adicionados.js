import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Message from '../layout/Mensagem'
import Container from '../layout/Container'
import Loadind from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.Adicionados.Module.css'



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
                .then((resp) => resp.json())
                .then((data) => {
                    setProjects(data)
                    console.log(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 300)
    }, [])

    function removeProject(id) {

        fetch(`http://localhost:5000/projects/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        })
        .then(resp => resp.json())
        .then(data =>{
            setProjects(projects.filter((project)=> project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')

        } )

    }

    return (
        <div className={styles.project_container}>
            <div className='title_container'>
                <h1>Projetos</h1>
                <LinkButton to='/projetos' text='Criar projetos' />
            </div>
            {mensagem && <Message type="sucess" msg={mensagem} />}
            {projectMessage && <Message type="error" msg={projectMessage} />}

            <Container customClass="start">
                {projects.length > 0 && projects.map((projects) => (
                    <ProjectCard
                        id={projects.id}
                        name={projects.name}
                        budget={projects.budget}
                        category={projects.category.name}
                        key={projects.id}
                        handleRemove={removeProject}

                    />
                ))}
                {!removeLoading && <Loadind />}

                {removeLoading && projects.length === 0 &&
                    <p> Não há projetos cadastrados</p>
                }
            </Container>
        </div>
    )
}

export default ProjectsAdicionados