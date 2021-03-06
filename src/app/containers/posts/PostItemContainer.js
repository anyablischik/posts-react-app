import {connect} from 'react-redux';
import {postOperations} from '../../../redux/posts';
import PostItem from '../../components/posts/PostItem';

const mapDispatchToProps = {
    deletePost: postOperations.deletePost
};

const PostItemContainer = connect(
    null,
    mapDispatchToProps
)(PostItem);

export default PostItemContainer;