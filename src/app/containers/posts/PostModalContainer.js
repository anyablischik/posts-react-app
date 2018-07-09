import {connect} from 'react-redux';
import {postOperations} from "../../../redux/post";
import PostModal from "../../components/posts/PostModal";

const mapDispatchToProps = {
    createPost: postOperations.createPost,
    updatePost: postOperations.updatePost
};

const PostModalContainer = connect(
    null,
    mapDispatchToProps
)(PostModal);

export default PostModalContainer;