import styles from './MainPage.module.css';
import { useForm } from "react-hook-form";
import Paginator from '../common/Paginator';
import MainPageTable from './MainPageTable';
// import { useEffect } from 'react';

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
                        <MainPageTable repositories={props.repositories} currentPage={props.currentPage} />
                    </tbody>
                </table>
            </div>
            <div>
                {props.searchName && <Paginator pageSize={props.pageSize}
                    totalCount={props.totalCount}
                    currentPage={props.currentPage}
                    setCurrentPage={props.setCurrentPage} />}
            </div>
        </div>
    )
}

const MainPageForm = (props) => {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        props.setSearchName(data.searchByName);
    }

    // useEffect(() => {
    //     const subscription = watch((data) => {
    //         props.setSearchName(data);
    //     })
    //     return () => subscription.unsubscribe();
    // }, [watch]);

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