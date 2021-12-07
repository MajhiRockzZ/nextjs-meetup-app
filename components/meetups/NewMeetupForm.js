import React from 'react';
import styled from 'styled-components';

import Card from '../ui/Card';

const NewMeetupForm = () => {
  return (
    <Card>
      <Form>
        <div className='control'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' required />
        </div>
        <div className='control'>
          <label htmlFor='image'>Image</label>
          <input type='url' id='image' required />
        </div>
        <div className='control'>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' required />
        </div>
        <div className='control'>
          <label htmlFor='descriptiion'>Description</label>
          <textarea id='description' rows='5' required></textarea>
        </div>
        <div className='actions'>
          <button>Add Meetup</button>
        </div>
      </Form>
    </Card>
  );
};

const Form = styled.form`
  padding: 1rem;

  .control {
    margin-bottom: 0.5rem;

    label {
      display: block;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    input,
    textarea {
      display: block;
      font: inherit;
      border-radius: 4px;
      border: 1px solid #ccc;
      padding: 0.25rem;
      width: 100%;
    }
  }

  .actions {
    margin-top: 1rem;
    text-align: right;

    button {
      font: inherit;
      cursor: pointer;
      background-color: #77002e;
      color: #fff;
      padding: 0.5rem 1.5rem;
      border: 1px solid #77002e;
      border-radius: 4px;
      font-weight: 700;

      &:hover,
      &:active {
        background-color: #a50e48;
        border-color: #a50e48;
      }
    }
  }
`;

export default NewMeetupForm;
