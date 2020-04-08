import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Post.css";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { deletePostAction } from "../../store/actions/PostActions";
import EditPost from "../Posts/EditPost/EditPost";


const Post = props => {
    const [edit, setEdit] = useState(false);

    const handleDelete = () => {
        props.dispatch(deletePostAction(props.post))
    }

    const handleEdit = () => {
        setEdit(!edit)
    }

    useEffect(() => {

    }, [props.allPosts]);

    return (
        <div className="post_container" key={props.i}>

            {edit ? <EditPost edit={edit} editPost={props.post} setEdit={setEdit} /> : <></>}

            <div>
                {props.post.title}
            </div>
            <div className="camera_icon_new_post">
                    <MdDelete onClick={handleDelete} size={25}/>
                    <FiEdit onClick={handleEdit} size={25}/>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return{
        allPosts: state.postReducer.allPosts,
    };
};

export default connect(mapStateToProps)(Post);