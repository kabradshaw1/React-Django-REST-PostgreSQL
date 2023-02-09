
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Button } from 'react-bootstrap';

const Profile = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogout = () => {
    //
  };
  return (
    <Container>
      <Button onClick={handleLogout}>Logout</Button>
    </Container>

  );
};

export default Profile;