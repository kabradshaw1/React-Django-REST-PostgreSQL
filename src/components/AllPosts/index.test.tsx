import React from "react";
import AllPosts from "./index";
import { render, fireEvent, waitFor } from '@testing-library/react'
import axios from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('API call test', () => {
  describe('when API call is successful', () => {

    const renderComponent = () => (render(<AllPosts/>))
    test('Should do a get request for all posts', async () => {

      const { getByText, getAllByRole } = renderComponent();
      
      // fireEvent.click(getByText('Get all posts'))

      mockedAxios.get.mockResolvedValue({
        data: [
          {
            id:1,
            postText: 'post 1',
            created: ,
          }
        ]
      })
    
      // expect(post).toEqual('First Post')
    })
  });

  describe('when API call fails', () => {
    test('should return return emply post list', () => {

    })
  })
})

test('Should render post component', () => {

});