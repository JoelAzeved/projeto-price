import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


import Loadind from '../layout/Loading'
import ProjectForm from '../project/ProjectForm'
import Container from '../layout/Container'
import Mensagem from '../layout/Mensagem'
import styles from './ProjectEdicao.module.css'




function ProjectEdicao() {
    const { id } = useParams()

    const [project, setProject] = useState([])
    const [showProjectform, setShowProjectForm] = useState(false)
    const [services, setServices] = useState([])
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                },
            })
                .then(resp => resp.json())
                .then((data) => {
                    setProject(data)
                    setServices(data.services)
                })
                .catch((err) => console.log(err))

        }, 300)
    }, [id])

    function editPost(project) {
        
       if (project.budget < project.price) {
            setMessage('O orçamento não pode ser maior que o custo do projeto !')
            setType('error')
            return (false)

        }
        fetch(`http://localhost:5000/projects/${project.id} `, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        })
            .then(resp => resp.json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(false)
                setMessage('Atualizado com sucesso!')
                setType('sucess')
            })
            .catch(err => console.log(err))
 
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectform)
    }

 


    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass='column'>
                        {message && <Mensagem type={type} msg={message} />}
                        <div className={styles.details_container}>
                            <h2>Projeto: {project.name}</h2>
                            <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectform ? 'Editar Projetos ' : 'Fechar '}</button>
                            {!showProjectform ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total orçamento:</span> R${project.budget}
                                    </p>
                                 
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <ProjectForm
                                        handleSubmit={editPost}
                                        btnText='Concluir ediçao'
                                        projectData={project}
                                    />
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            )
                : (
                    <Loadind />
                )}
        </>
    )

}

export default ProjectEdicao