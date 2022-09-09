const SET_REPOSITORIES = 'SET_REPOSITORIES';
const SET_SEARCH_NAME = 'SET_SEARCH_NAME';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
    repositories: [],
    searchName: '',
    pageSize: 10,
    totalCount: 0,
    currentPage: 1
};

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOSITORIES:
            return {
                ...state,
                repositories: action.repositories,
                totalCount: action.totalCount
            };

        case SET_SEARCH_NAME:
            return {
                ...state,
                searchName: action.name
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        default:
            return state;
    }
}

export const setRepositories = (repositories, totalCount) => {
    return { type: SET_REPOSITORIES, repositories, totalCount };
};
export const setSearchName = (name) => {
    return { type: SET_SEARCH_NAME, name };
};
export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage };
};

export default mainPageReducer;