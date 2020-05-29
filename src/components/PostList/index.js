import React from 'react'
import { connect } from 'react-redux'
import { fetchPostsAndUsers } from '../../actions'
import UserHeader from '../UserHeader'

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPostsAndUsers()
    }

    render() {
        return(
            <div className="ui divided relaxed list">
                {this.props.posts.map(({id, title, body, user_id}) => {
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
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postsList.posts
    }
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList)