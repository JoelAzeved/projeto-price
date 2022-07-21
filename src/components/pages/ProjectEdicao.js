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
    const [showServiceform, setShowServiceForm] = useState(false)
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
                .then((data) => {setProject(data)})
                .catch((err) => console.log(err))

        }, 300)
    }, [id])

    function editPost(project) {
        setMessage('')
        if (project.budget < project.price) {
            setMessage('O orçamento não pode ser maior que o custo do projeto !')
            setType('error')
            return (false)

        }
        fetch(`http://localhost:5000/projects/${id} `, {
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

    function toggleServiceForm() {
        setShowServiceForm(!showServiceform)
    }


    return (
        <div>
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
                                    <p>
                                        <span>Total ultizado:</span> R${project.price}
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
                        <div className={styles.service_form_container}>
                            <h3>Adicione um serviço</h3>
                            <button className={styles.btn} onClick={toggleServiceForm}>{!showServiceform ? 'Adicionar serviços' : 'Fechar '}
                            </button>
                            <div className={styles.project_info}>
                                {showServiceform && 
                                <div>
                                    Formulario
                                </div>

                                }
                            </div>
                        </div>
                        <h3>Serviços</h3>
                        <Container customClass='start'>
                            <p>Itens servicos</p>

                        </Container>

                    </Container>
                </div>
            )
                : (
                    <Loadind />
                )}
        </div>
    )

}

export default ProjectEdicao