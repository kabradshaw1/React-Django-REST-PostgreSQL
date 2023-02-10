
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Button } from 'react-bootstrap';
import authSlice from "../store/slices/auth";

const Profile = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogout = () => {
    dispatch(authSlice.actions.logout());
    // history.push("/login");
  };
  return (
    <Container>
      <Button onClick={handleLogout}>Logout</Button>
    </Container>

  );
};

export default Profile;