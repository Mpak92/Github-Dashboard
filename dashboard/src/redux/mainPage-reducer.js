const SET_REPOSITORIES = 'SET_REPOSITORIES';

const initialState = {
    repositories: [],
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

        default:
            return state;
    }
}

export const setRepositories = (repositories) => {
    return { type: SET_REPOSITORIES, repositories };
};

export default mainPageReducer;