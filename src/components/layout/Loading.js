import loading from '../../img/Loading.svg'
import styles from './Loading.module.css'


function Loadind() {
    return (
        <div className={styles.loader_container}>
            <img src={loading} alt='Loading' />
        </div>
    )
}

export default Loadind