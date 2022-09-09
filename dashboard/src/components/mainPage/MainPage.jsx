import styles from './MainPage.module.css';
import { useForm } from "react-hook-form";
import Paginator from '../common/Paginator';

const MainPage = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.titul}>Github Dasgboard</div>
            <div className={styles.filter}><MainPageForm setSearchName={props.setSearchName} /></div>
            <div className={styles.list}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Название репозитория</th>
                            <th>Кол-во звёзд на github</th>
                            <th>Дата последнего коммита</th>
                            <th>Ссылка на Github</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.repositories.map((rep, index) => {
                            return <tr key={rep.id}>
                                <td>{index + 1}</td>
                                <td>{rep.name}</td>
                                <td>{rep.stargazers_count}</td>
                                <td>{rep.pushed_at}</td>
                                <td>{rep.html_url}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <div className={styles.paginator}><Paginator pageSize={props.pageSize}
                totalCount={props.totalCount}
                currentPage={props.currentPage} />
            </div>
        </div>
    )
}

const MainPageForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        props.setSearchName(data.searchByName);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register('searchByName')}
                    type="text"
                    placeholder="Please enter a repository name to start searching by name"
                    className={styles.search} />
            </div>
        </form>
    )
}

export default MainPage;