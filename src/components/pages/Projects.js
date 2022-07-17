import styles from './Projects.module.css'
import ProjectForm from '../project/ProjectForm'

function Project () {

    return(
        <div className={styles.newproject}>
            <h2>Projetos</h2>
            <p>Crie seu projeto e gerencie os serviços</p>
            <ProjectForm />
        </div>
    )
}

export default Project