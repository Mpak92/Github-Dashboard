import { connect } from 'react-redux';
import MainPage from './MainPage';
import { setRepositories, setSearchName, setCurrentPage } from './../../redux/mainPage-reducer';
import useFetch from './../customHooks/useFetch';
import { useEffect } from 'react';

const MainPageContainer = ({searchName, currentPage, ...props}) => {

    let { data, error, loading, fetchNow } = useFetch(`https://api.github.com/search/repositories?q=stars:%3E3000&sort=stars&per_page=${props.pageSize}&page=1`);

    useEffect(() => {
        if (data) props.setRepositories(data.items, data.total_count);
    }, [data])

    useEffect(() => {
        if (searchName) {
            fetchNow(`https://api.github.com/search/repositories?q=${searchName}+in:name&sort=stars&per_page=${props.pageSize}&page=${currentPage}`);
        }
    }, [searchName, currentPage])

    if (loading) return <div>Loading...</div>;
    if (error) console.log(error);

    return (
        <MainPage repositories={props.repositories}
            setSearchName={props.setSearchName}
            pageSize={props.pageSize}
            totalCount={props.totalCount}
            currentPage={currentPage} 
            setCurrentPage={props.setCurrentPage} />
    )
}

const mapStateToProps = (state) => {
    return {
        repositories: state.main.repositories,
        pageSize: state.main.pageSize,
        currentPage: state.main.currentPage,
        totalCount: state.main.totalCount,
        searchName: state.main.searchName
    }
};

export default connect(mapStateToProps, { setRepositories, setSearchName, setCurrentPage })(MainPageContainer);
