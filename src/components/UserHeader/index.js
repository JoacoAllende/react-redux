import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../actions";
import { HeaderComponent } from "./index.styled";
import BackgroundColorContext from "../../contexts/BackgroundColorContext";

function UserHeader(props) {
  const backgroundColor = useContext(BackgroundColorContext);
  const { user_id } = props;
  const user = useSelector((state) =>
    state.users.usersList.find((user) => user.id === user_id)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(user_id));
  }, []);

  if (!user) return <div />;
  const { first_name, last_name } = user;
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

export default UserHeader;
