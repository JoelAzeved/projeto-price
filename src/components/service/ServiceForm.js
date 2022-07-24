
import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'


import styles from './Serviceform.module.css'

function ServiceForm({handleSubmit, btnText, projectData}) {
    const [service, setService] = useState({})
   
    const submit = (e) => {
      
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({...service, [e.target.name]: e.target.value})

    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnchange={handleChange}
            />

            <Input
                type="number"
                text="Custo do serviço"
                name="price"
                placeholder="Insira o valor total"
                handleOnchange={handleChange}
            />

            <Input
                type="text"
                text="Descrição do serviço"
                name="description"
                placeholder="Escreva o nome do serviço"
                handleOnchange={handleChange}
            />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ServiceForm