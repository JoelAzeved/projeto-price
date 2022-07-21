import styles from './Projects.module.css'
import ProjectForm from '../project/ProjectForm'
import {useNavigate} from 'react-router-dom'

function Project () {

    const navigate = useNavigate()

    function CreatePost(project) {
        project.price = 0
        project.service = []

        fetch("http://localhost:5000/projects",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(project)
        })
        .then((resp)=> resp.json())
        .then(() => { 
            
            navigate('/projetosadicionados', {state:{ mensagem: ' Projeto adicionado com sucesso! '}})
            
        })
        .catch((e) => console.log(e))

    }

    return(
        <div className={styles.newproject}>
            <h2>Projetos</h2>
            <p>Crie seu projeto e gerencie os serviços</p>
            <ProjectForm handleSubmit={CreatePost} btnText="Criar projeto"/>
        </div>
    )
}

export default Project