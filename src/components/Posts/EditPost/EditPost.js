import React, { useState } from "react";
import { connect } from "react-redux";
import "./EditPost.css";
import { editPostAction } from "../../../store/actions/PostActions";


const EditPost = props => {
    const [data, setData] = useState();

    const handleChange = e => {
        e.preventDefault()
        const val = e.target.value;
        setData(val);
    }

    const handleSubmit = () => {
        props.dispatch(editPostAction(props.editPost, data))
        props.setEdit(!props.edit)
    }

    const handleKeepPost = () => {
        props.setEdit(!props.edit) 
    }

    return(
        <div className='modal-wrapper'>
        <div className='modal-background'/>
            <div className='modal_edit_content'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input className='update-input' name="content" type='text'
                        defaultValue={props.editPost.title} onChange={handleChange}/>
                    </div>

                    <div className="edit_buttons">
                        <button type="submit" id="edit_post" className="edit_post_button">Update</button>
                        <button onClick={handleKeepPost} className="edit_post_button">Cancel</button>
                    </div>
                </form>
        </div>
    </div>
    );
};

export default connect()(EditPost)