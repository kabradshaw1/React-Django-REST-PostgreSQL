import React from "react";
import AllPosts, { getPosts } from "./index";
import axios from "axios";

jest.mock('axios');

describe('API call test', () => {
  test('Should do a get request for all posts', async () => {
    axios.get.mockResolvedValue( {
      {

      }
    })
    const post = await getPosts;
    expect(post).toEqual('First Post')
  });
})

test('Should render post component', () => {

});