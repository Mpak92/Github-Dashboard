import styles from './MainPage.module.css';
import Paginator from '../common/Paginator';
import MainPageTable from './MainPageTable';
import MainPageForm from './MainPageForm';
import { useDispatch, useSelector } from 'react-redux';
import { setRepositories, setSearchName, setCurrentPage } from '../../redux/mainPage-reducer';
import useFetch from '../customHooks/useFetch';
import { useEffect } from 'react';
import Preloader from '../common/Preloader';

const MainPage = () => {
    const repositories = useSelector(state => state.main.repositories);
    const pageSize = useSelector(state => state.main.pageSize);
    const currentPage = useSelector(state => state.main.currentPage);
    const totalCount = useSelector(state => state.main.totalCount);
    const searchName = useSelector(state => state.main.searchName);

    const dispatch = useDispatch();

    const getSearchName = (name) => {
        dispatch(setSearchName(name));
    }

    const getCurrentPage = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    }

    let { data, error, loading, fetchNow } = useFetch(`https://api.github.com/search/repositories?q=stars:%3E3000&sort=stars&per_page=${pageSize}&page=1`);

    useEffect(() => {
        if (data) dispatch(setRepositories(data.items, data.total_count));
    }, [data])

    useEffect(() => {
        if (searchName) {
            fetchNow(`https://api.github.com/search/repositories?q=${searchName}+in:name&sort=stars&per_page=${pageSize}&page=${currentPage}`);
        }
    }, [searchName, currentPage])

    // useEffect(() => {
    //     if (searchName === '') {
    //         fetchNow(`https://api.github.com/search/repositories?q=stars:%3E3000&sort=stars&per_page=${pageSize}&page=1`);
    //     }
    // }, [searchName])

    if (loading) return <Preloader />;
    if (error) console.log(error);

    return (
        <div className={styles.container}>
            <div className={styles.titul}>Github Dashboard</div>
            <div className={styles.filter}><MainPageForm getSearchName={getSearchName} searchName={searchName} /></div>
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
                        <MainPageTable repositories={repositories}
                            currentPage={currentPage} />
                    </tbody>
                </table>
            </div>
            <div>
                {searchName && <Paginator pageSize={pageSize}
                    totalCount={totalCount}
                    currentPage={currentPage}
                    getCurrentPage={getCurrentPage} />}
            </div>
        </div>
    )
}

export default MainPage;