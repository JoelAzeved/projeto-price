import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/moeda.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'><img className={styles.img} src={logo} alt='logo'/></Link>

                <ul className={styles.list}>
                    <li className={styles.iten}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.iten}>
                        <Link to='/projetosadicionados'>Projetos</Link>
                    </li>
                    <li className={styles.iten}>
                        <Link to='/empresa'>Empresa</Link>
                    </li>
                    <li className={styles.iten}>
                        <Link to='/contato'>Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar