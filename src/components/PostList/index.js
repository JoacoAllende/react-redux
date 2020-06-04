import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts, cancelGetPosts } from "../../actions";
import UserHeader from "../UserHeader";

function PostList(props) {
  useEffect(() => {
    props.getPosts();
  }, []);

  const onCancelClick = () => {
    props.cancelGetPosts();
  };

  return (
    <div>
      <div className="ui segment">
        <button className="negative ui button" onClick={onCancelClick}>
          Cancel PostList
        </button>
      </div>
      <div className="ui divided relaxed list">
        {props.posts.map(({ id, title, body, user_id }) => {
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

const mapStateToProps = (state) => {
  return {
    posts: state.posts.postsList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
  cancelGetPosts: () => dispatch(cancelGetPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
