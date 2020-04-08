import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { allPostsAction } from "../../store/actions/PostActions";
import Post from "../Posts/Post";
import "./LandingPage.css";


const LandingPage = props => {
    // search post
    let [state, setState] = useState({
        search: "",
    });

    const handleSearchPost = e => {
        setState({...state, [e.target.name]: e.target.value})
    };

    let filteredPost = props.allPosts.filter(
        (post) => {
            return post.title.indexOf(state.search) !== -1;
        }
    );

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 25;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPost.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(filteredPost.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    useEffect(() => {
        props.dispatch(allPostsAction())
    }, []);

    
    return (
        <div>
            <h2>Post List</h2>

            <div className='search_post'>
                <input type='text' name='search' value={state.search} className='searchPostInput' 
                onChange={handleSearchPost} placeholder='Search posts...'></input>
            </div>

            <div className="display_post_container" >
            {filteredPost && currentPosts.map((post, i)=> {
                return <Post key={i} post={post}/>
            })}
            </div>
            {/* Pagination */}
            <div className="pagination_container">
                <nav>
                    <ul className="pagination">
                        {pageNumbers && pageNumbers.map(number => (
                            <li key={number} className="page_item">
                                <a onClick={() => handlePagination(number)} href="#" className="page_link">
                                    {number}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

        </div>
       
    );
};


const mapStateToProps = state => {
    return{
        allPosts: state.postReducer.allPosts,
    };
};

export default connect(mapStateToProps)(LandingPage);