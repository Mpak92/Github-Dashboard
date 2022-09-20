import styles from './MainPage.module.css';
import Paginator from '../common/Paginator';
import MainPageTable from './MainPageTable';
import MainPageForm from './MainPageForm';
import { useDispatch, useSelector } from 'react-redux';
import { setRepositories, setSearchName, setCurrentPage } from '../../redux/mainPage-reducer';
import useFetch from '../customHooks/useFetch';
import { useCallback, useEffect } from 'react';
import Preloader from '../common/Preloader';

const MainPage = () => {
    const main = useSelector(state => state.main);

    const dispatch = useDispatch();

    const getSearchName = useCallback((name) => {
        dispatch(setSearchName(name));
    }, [dispatch])

    const getCurrentPage = useCallback((pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    }, [dispatch])

    let { data, error, loading, fetchNow } = useFetch(main.searchName ? null : `https://api.github.com/search/repositories?q=stars:%3E3000&sort=stars&per_page=${main.pageSize}&page=1`);

    useEffect(() => {
        if (data) dispatch(setRepositories(data.items, data.total_count));
    }, [data])

    useEffect(() => {
        if (!main.searchName) getCurrentPage(1);
    }, [])

    useEffect(() => {
        if (main.searchName) {
            fetchNow(`https://api.github.com/search/repositories?q=${main.searchName}+in:name&sort=stars&per_page=${main.pageSize}&page=${main.currentPage}`);
        }
    }, [main.searchName, main.currentPage])

    if (error) console.log(error);

    return (
        <div className={styles.container}>
            <div className={styles.titul}>Github Dashboard</div>
            <div className={styles.filter}><MainPageForm getSearchName={getSearchName} searchName={main.searchName} /></div>
            <div className={styles.list}>
                {loading ? <Preloader /> : <table className={styles.table}>
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
                        <MainPageTable repositories={main.repositories}
                            currentPage={main.currentPage} />
                    </tbody>
                </table>}
            </div>
            <div>
                {main.searchName && <Paginator pageSize={main.pageSize}
                    totalCount={main.totalCount}
                    currentPage={main.currentPage}
                    getCurrentPage={getCurrentPage} />}
            </div>
        </div>
    )
}

export default MainPage;