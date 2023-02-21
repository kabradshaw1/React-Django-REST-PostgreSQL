import React from "react";
import { getPreEmitDiagnostics } from "typescript";
import AllPosts, { getPosts } from "./index";

const axios = require('axios');

jest.mock('axios');

test('Should do a get request for all posts', async () => {
  const post = await getPosts;
  expect(post).toEqual('First Post')
});

test('Should render post component', () => {

});