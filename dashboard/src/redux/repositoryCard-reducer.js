const SET_REPOSITORY_CARD = 'SET_REPOSITORY_CARD';
const SET_LIST_OF_LANGUAGES = 'SET_LIST_OF_LANGUAGES';
const SET_CONTRIBUTORS = 'SET_CONTRIBUTORS';

const initialState = {
    repositoryCard: {},
    listOfLanguages: {},
    contributors: []
};

const repositoryCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOSITORY_CARD:
            return {
                ...state,
                repositoryCard: action.card
            };

        case SET_LIST_OF_LANGUAGES:
            return {
                ...state,
                listOfLanguages: action.list
            };

        case SET_CONTRIBUTORS:
            return {
                ...state,
                contributors: action.contributors
            };

        default:
            return state;
    }
}

export const setRepositoryCard = (card) => {
    return { type: SET_REPOSITORY_CARD, card };
};
export const setListOfLanguages = (list) => {
    return { type: SET_LIST_OF_LANGUAGES, list };
};
export const setContributors = (contributors) => {
    return { type: SET_CONTRIBUTORS, contributors };
};

export default repositoryCardReducer;