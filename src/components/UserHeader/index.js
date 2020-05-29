import React from 'react'
import { connect } from 'react-redux'

function UserHeader(props) {
    if (!props.user)
        return <div />
    const { first_name, last_name } = props.user
    return <h4>{`${first_name} ${last_name}`}</h4>
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.usersList.users.find(user => user.id === ownProps.user_id) }
}

export default connect(mapStateToProps)(UserHeader)