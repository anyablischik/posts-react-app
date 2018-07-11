import actions from './actions';
import * as request from 'superagent';
import appConstants from '../constants';

const getListOfPosts = () => (dispatch) => {
        request
        .get(appConstants.API_URL + '/posts')
        .accept('application/json')
        .then(res => {
            dispatch(actions.getListOfPostsAction(res.body));
        })
        .catch(error => {
            //TODO error alert
        })
};

const createPost = (post) => (dispatch) => {
    request
        .post(appConstants.API_URL + '/posts')
        .send(post)
        .accept('application/json')
        .then(() => {
            dispatch(actions.createPostAction());
        })
        .catch(error => {
            //TODO error alert
        })
};

const updatePost = (post) => (dispatch) => {
    request
        .put(appConstants.API_URL + `/posts/${post.id}`)
        .send(post)
        .accept('application/json')
        .then(() => {
            dispatch(actions.updatePostAction());
        })
        .catch(error => {
            //TODO error alert
        })
};

const deletePost = (id) => (dispatch) => {
    request
        .delete(appConstants.API_URL + `/posts/${id}`)
        .accept('application/json')
        .then(() => {
            dispatch(actions.deletePostAction());
        })
        .catch(error => {
            //TODO error alert
        })
};

const sortByType = (type) => (dispatch) => {
    request
        .get(appConstants.API_URL + `/posts?_sort=${type}&_order=asc`)
        .accept('application/json')
        .then(res => {
            dispatch(actions.sortByTypeAction(res.body));
        })
        .catch(error => {
            //TODO error alert
        })
};

const filterByTypeWithValue = (type, value) => (dispatch) => {
    request
        .get(appConstants.API_URL + `/posts?${type}=${value}`)
        .accept('application/json')
        .then(res => {
            dispatch(actions.filterByTypeWithValueAction(res.body));
        })
        .catch(error => {
            //TODO error alert
        })
};

export default ({
    getListOfPosts,
    createPost,
    updatePost,
    deletePost,
    sortByType,
    filterByTypeWithValue
})