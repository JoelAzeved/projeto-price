import savings from '../../img/price.png'
import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'

function Home() {
    return(
        <section className={styles.home_container}>
            <h2>Bem-Vindo ao <span>Price</span></h2>
            <p>Inicie a gerência dos seus projetos agora mesmo!</p>
            <LinkButton  to='/project' text='Criar projetos'/>
            <img src={savings} alt='Price'></img>
        </section>
    )
}

export default Home