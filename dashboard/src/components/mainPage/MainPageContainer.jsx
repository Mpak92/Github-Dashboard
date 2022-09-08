import { connect } from 'react-redux';
import MainPage from './MainPage';
import { setRepositories } from './../../redux/mainPage-reducer';

const mapStateToProps = (state) => {
    return {
        repositories: state.main.repositories,
        pageSize: state.main.pageSize
    }
};

const MainPageContainer = connect(mapStateToProps, { setRepositories })(MainPage);

export default MainPageContainer;
