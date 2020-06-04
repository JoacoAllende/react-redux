import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../../actions";
import { HeaderComponent } from "./index.styled";
import BackgroundColorContext from "../../contexts/BackgroundColorContext";

function UserHeader(props) {
  const backgroundColor = useContext(BackgroundColorContext);

  useEffect(() => {
    const { user_id } = props;
    props.getUsers(user_id);
  }, []);

  if (!props.user) return <div />;
  const { first_name, last_name } = props.user;
  return (
    <HeaderComponent backgroundColor={backgroundColor}>
      <h4>{`${first_name} ${last_name}`}</h4>
    </HeaderComponent>
  );
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
