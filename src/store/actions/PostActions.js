export const allPostsAction = () => async (dispatch, getState) => {

    const myHeaders = new Headers({
        "content-type": "application/json",
    });

    const config = {
        method: 'GET',
        headers: myHeaders
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", config);
    const data = await response.json();
    
    const action = {
        type: "GET_ALL_POSTS",
        payload: data
    };

    dispatch(action);
}


export const deletePostAction = (post) => async (dispatch, getState) => {

    const myHeaders = new Headers({
        "content-type": "application/json",
    });

    const config = {
        method: 'DELETE',
        headers: myHeaders
    };

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, config);
    
    console.log("desde delete action response", response)
   
    const action = {
        type: "DELETE_POST",
        payload: post.id
    };

    dispatch(action);
}


export const editPostAction = (post, content) => async (dispatch, getState) => {
    const myHeaders = new Headers({
        "Content-Type": "application/json",
    });

    const body = {
        "title": content
    };

    const config = {
        method: 'PATCH',
        headers: myHeaders,
        body: JSON.stringify(body)
    };

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, config);
    const data = await response.json();

    const action = {
        type: "UPDATE_POST",
        payload: data
    };
    
    dispatch(action);
}

