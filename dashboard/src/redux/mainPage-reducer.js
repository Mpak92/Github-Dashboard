const SET_REPOSITORIES = 'SET_REPOSITORIES';
const SET_SEARCH_NAME = 'SET_SEARCH_NAME';

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
                repositories: action.repositories
            };

        case SET_SEARCH_NAME:
            return {
                ...state,
                searchName: action.name
            };

        default:
            return state;
    }
}

export const setRepositories = (repositories) => {
    return { type: SET_REPOSITORIES, repositories };
};
export const setSearchName = (name) => {
    return { type: SET_SEARCH_NAME, name };
};

export default mainPageReducer;