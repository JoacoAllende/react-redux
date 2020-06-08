import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, cancelGetPosts } from "../../actions";
import UserHeader from "../UserHeader";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function PostList() {
  const posts = useSelector((state) => state.posts.postsList);
  const dispatch = useDispatch();
  useDocumentTitle("Posts");

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const onCancelClick = () => {
    dispatch(cancelGetPosts());
  };

  return (
    <div>
      <div className="ui segment">
        <button className="negative ui button" onClick={onCancelClick}>
          Cancel PostList
        </button>
      </div>
      <div className="ui divided relaxed list">
        {posts.map(({ id, title, body, user_id }) => {
          return (
            <div className="item" key={id}>
              <div className="content">
                <div className="description">
                  <h2>{title}</h2>
                  <p>{body}</p>
                  <UserHeader user_id={user_id} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

PropTypes.PostList = {
  posts: PropTypes.array.isRequired,
};

export default PostList;
