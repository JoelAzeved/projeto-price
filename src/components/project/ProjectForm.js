import styles from './ProjectForm.module.css'

function ProjectForm() {
    return (
        <form className={styles.form}>
            <div>
                <input type="text" placeholder="Insira seu projeto" />
            </div>
            <div>
                <input type="number" placeholder="Insira seu orçamento" />
            </div>
            <select name="category_id">
                <option disabled>Selecione a categoria</option>
            </select>
            <div>
                <input type="submit" value="Criar projeto" />
            </div>
        </form>
    )
}

export default ProjectForm