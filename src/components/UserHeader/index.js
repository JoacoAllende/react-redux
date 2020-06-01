import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../actions'

class UserHeader extends React.Component {

    componentDidMount() {
        const { user_id } = this.props
        this.props.getUsers(user_id)
    }

    render() {
        if (!this.props.user)
            return <div />
        const { first_name, last_name } = this.props.user
        return <h4>{`${first_name} ${last_name}`}</h4>
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.usersList.users.find(user => user.id === ownProps.user_id) }
}

export default connect(mapStateToProps, {getUsers})(UserHeader)