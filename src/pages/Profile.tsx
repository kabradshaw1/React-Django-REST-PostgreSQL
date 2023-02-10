
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Button } from 'react-bootstrap';
import authSlice from "../store/slices/auth";
import {fetcher} from '../utils/axios';
import {UserResponse} from "../utils/types";
import {RootState} from "../store";
// import useSWR from 'swr';

const Profile = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  // const userId = account?.id;

  // const user = useSWR<UserResponse>(`/user/${userId}/`, fetcher)

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