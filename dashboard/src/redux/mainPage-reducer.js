const initialState = {
    repositories: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1
};

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default mainPageReducer;