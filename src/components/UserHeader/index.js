import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../actions'
import { HeaderComponent } from './index.styled'
import BackgroundColorContext from '../../contexts/BackgroundColorContext'

class UserHeader extends React.Component {

    static contextType = BackgroundColorContext

    componentDidMount() {
        const { user_id } = this.props
        this.props.getUsers(user_id)
    }

    render() {
        if (!this.props.user)
            return <div />
        const { first_name, last_name } = this.props.user
        return (
            <HeaderComponent backgroundColor={this.context}>
                <h4>{`${first_name} ${last_name}`}</h4>
            </HeaderComponent>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.usersList.users.find(user => user.id === ownProps.user_id) }
}

export default connect(mapStateToProps, {getUsers})(UserHeader)