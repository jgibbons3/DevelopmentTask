const initialState = {
    allPosts: [],
}

const postReducer = function (state = initialState, action) {
    switch (action.type) {
        case "GET_ALL_POSTS":
            return {
                ...state,
                allPosts: action.payload
            };

        case "DELETE_POST":
            const copyPosts = [ ...state.allPosts ];
            const deletePost = copyPosts.filter(item => (item.id !== action.payload)) 
            return {
                ...state,
                allPosts: deletePost
            }

        case "UPDATE_POST":
            const copyEditPosts = [ ...state.allPosts ];
            const editPost = copyEditPosts.findIndex(item => (item.id === action.payload.id)) 
            const editAllPost = copyEditPosts[editPost] //make a copy from post i want to edit
            editAllPost.title = action.payload.title //change title

            return {
                ...state,
                allPosts: copyEditPosts
            };

        default:
            return state;
    };
};


export default postReducer;