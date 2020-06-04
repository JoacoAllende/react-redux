import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../../actions";
import { HeaderComponent } from "./index.styled";
import BackgroundColorContext from "../../contexts/BackgroundColorContext";

class UserHeader extends React.Component {
  static contextType = BackgroundColorContext;

  componentDidMount() {
    const { user_id } = this.props;
    this.props.getUsers(user_id);
  }

  render() {
    if (!this.props.user) return <div />;
    const { first_name, last_name } = this.props.user;
    return (
      <HeaderComponent backgroundColor={this.context}>
        <h4>{`${first_name} ${last_name}`}</h4>
      </HeaderComponent>
    );
  }
}

PropTypes.UserHeader = {
  user_id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.usersList.find((user) => user.id === ownProps.user_id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUsers: (userId) => dispatch(getUsers(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
