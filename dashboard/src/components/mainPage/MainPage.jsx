import styles from './MainPage.module.css';
import { useForm } from "react-hook-form";
import useFetch from './../customHooks/useFetch';

const MainPage = (props) => {

    const { data, error, loading } = useFetch(`https://api.github.com/search/repositories?q=stars:%3E3000&sort=stars&per_page=${props.pageSize}&page=1`);
    if (loading) return <div>Loading...</div>;
    if (error) console.log(error);
    
    props.setRepositories(data?.items);

    return (
        <div className={styles.container}>
            <div className={styles.titul}>Github Dasgboard</div>
            <div className={styles.filter}><MainPageForm /></div>
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
            <div className={styles.paginator}>1, 2, 3, 4, 5</div>
        </div>
    )
}

const MainPageForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
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