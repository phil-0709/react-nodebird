import { Form, Input, Button } from 'antd';
import { useState, useCallback } from 'react';
import Link from 'next/link';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import PropTypes from 'prop-types';

const ButtonWrapper = css`
  margin-top: 10px;
`;

const FormStyle = css`
  padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <Form onFinish={onSubmitForm} css={FormStyle}>
      <div>
        <label htmlFor='user-id'>아이디</label>
        <br />
        <input name='user-id' value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor='user-id'>비밀번호</label>
        <br />
        <input
          type='password'
          name='user-id'
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <div css={ButtonWrapper}>
        <Button type='primary' htmlType='submit' loading={false}>
          로그인
        </Button>
        <Link href='/signup'>
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;
