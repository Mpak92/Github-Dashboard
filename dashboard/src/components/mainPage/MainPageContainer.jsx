import { connect } from 'react-redux';
import MainPage from './MainPage';
import { setRepositories, setSearchName } from './../../redux/mainPage-reducer';
import useFetch from './../customHooks/useFetch';
import { useEffect } from 'react';

const MainPageContainer = (props) => {

    const { data, error, loading } = useFetch(`https://api.github.com/search/repositories?q=stars:%3E3000&sort=stars&per_page=${props.pageSize}&page=1`);

    useEffect(() => {
        if (data) props.setRepositories(data.items);
    }, [data])

    if (loading) return <div>Loading...</div>;
    if (error) console.log(error);

    return (
        <MainPage repositories={props.repositories} setSearchName={props.setSearchName} searchName={props.searchName} />
    )
}

const mapStateToProps = (state) => {
    return {
        repositories: state.main.repositories,
        pageSize: state.main.pageSize,
        searchName: state.main.searchName
    }
};

export default connect(mapStateToProps, { setRepositories, setSearchName })(MainPageContainer);
