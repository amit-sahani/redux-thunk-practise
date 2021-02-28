import jsonPlaceholder from '../apis/jsonPlaceholder';

export const jsonPlaceholder = () =>{
    return async (dispatch) =>{
        const response = await jsonPlaceholder.get("/posts");
        dispatch({type: 'FETCH_POSTS', payload: response})
    }
}