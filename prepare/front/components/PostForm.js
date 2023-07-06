import { Form, Input, Button } from 'antd';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

const formStyle = css`
  margin: 10px 0 20px;
`;

const buttonStyle = css`
  float: right;
`;

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const [text, onChangeText] = useState('');
  const onSubmit = useCallback(() => {}, []);
  return (
    <Form css={formStyle} encType='multipart/form-data' onFinish={onSubmit}>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder='어떤 신기한 일이 있었나요?'
      />
      <div>
        <input type='file' multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type='primary' css={buttonStyle} htmlType='submit'>
          짹짹
        </Button>
      </div>
      {imagePaths.map((v) => (
        <div key={v} style={{ display: 'inline-block' }}>
          <img src={v} style={{ width: '200px' }} alt={v} />
          <div>
            <Button>제거</Button>
          </div>
        </div>
      ))}
    </Form>
  );
};

export default PostForm;
