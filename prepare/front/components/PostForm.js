import { Form } from 'antd';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const formStyle = css`
  margin: 10px 0 20px;
`;

const PostForm = () => {
  return (
    <Form
      css={formStyle}
      encType='multipart/form-data'
      onFinish={onSubmit}
    ></Form>
  );
};

export default PostForm;
