import { Link } from 'react-router-dom';
import styles from './MainPage.module.css';
import moment from 'moment';

const MainPageTable = (props) => {
    return (<>
        {props.repositories.map((rep, index) => {
            return <tr key={rep.id}>
                <td>{index + 1 + ((props.currentPage - 1) * 10)}</td>
                <td><Link className={styles.link} to={`${rep.full_name}`}>{rep.name}</Link></td>
                <td className={styles.star}>{rep.stargazers_count}</td>
                <td className={styles.date}>{moment(rep.pushed_at).format('DD.MM.YYYY HH:mm')}</td>
                <td>{rep.html_url}</td>
            </tr>
        })}
    </>)
}

export default MainPageTable;