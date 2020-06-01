import React from 'react'
import { connect } from 'react-redux'
import { getPosts, cancelGetPosts } from '../../actions'
import UserHeader from '../UserHeader'

class PostList extends React.Component {

    constructor(props) {
        super(props)
        this.onCancelClick = this.onCancelClick.bind(this)
    }

    componentDidMount() {
        this.props.getPosts()
    }

    onCancelClick() {
        this.props.cancelGetPosts()
    }

    render() {
        return (
            <div>
                <div className="ui segment">
                    <button className="negative ui button" onClick={this.onCancelClick}>
                        Cancel PostList
                    </button>
                </div>
                <div className="ui divided relaxed list">
                    {this.props.posts.map(({ id, title, body, user_id }) => {
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postsList.posts
    }
}

export default connect(mapStateToProps, { getPosts, cancelGetPosts })(PostList)