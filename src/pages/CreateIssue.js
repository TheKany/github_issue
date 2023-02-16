import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useUser } from '../hooks/useUser';

import Button from '../components/Button';
import TextField from '../components/TextField';
import { GITHUB_API } from '../constants';

import styles from './CreateIssue.module.css';

const validate = (values) => {
  let errors = {};
  if (values.title === '') {
    errors = { title: '타이틀은 필수값입니다.' };
  }

  return errors;
};

const CreateIssue = () => {
  const inputRef = useRef();
  const textareaRef = useRef();
  const navigate = useNavigate();
  const user = useUser();

  console.log({ user });

  const { isSubmitting, inputValues, onChange, errors, handleSubmit } = useForm(
    {
      initialValues: { title: '', body: '' },
      onSubmit: async () =>
        await axios.post(
          `${GITHUB_API}/repos/TheKany/github_issue/issues`,
          inputValues,
          {
            headers: {
              Authorization: process.env.REACT_APP_GITHUB_TOKEN,
              'Content-Type': 'application/json',
            },
          },
        ),
      validate,
      refs: { title: inputRef, body: textareaRef },
      onErrors: () => console.log('error'),
      onSuccess: (result) => {
        navigate('/', { replace: true });
      },
    },
  );

  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={styles.inputWrapper}>
        <form onSubmit={handleSubmit}>
          <TextField
            ref={inputRef}
            name="title"
            placeholder="Title"
            onChange={onChange}
            value={inputValues.title}
            error={errors.title}
          ></TextField>
          <TextField
            ref={textareaRef}
            type="textarea"
            name="body"
            placeholder="Leave a comment"
            onChange={onChange}
            value={inputValues.body}
            error={errors.body}
          ></TextField>
          <div className={styles.buttonWrapper}>
            <Button
              tpye="submit"
              style={{
                backgroundColor: '#2DA44E',
                color: 'white',
                fontSize: '14px',
              }}
              disabled={isSubmitting}
            >
              Submit new issue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateIssue;
