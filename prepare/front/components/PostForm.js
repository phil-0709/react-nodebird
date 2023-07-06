import { Form, Input, Button } from 'antd';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useCallback, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../reducers/post';

const formStyle = css`
  margin: 10px 0 20px;
`;

const buttonStyle = css`
  float: right;
`;

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const imageInput = useRef();
  const [text, setText] = useState('');

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    dispatch(addPost);
    setText('');
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form css={formStyle} encType='multipart/form-data' onFinish={onSubmit}>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder='어떤 신기한 일이 있었나요?'
      />
      <div>
        <input type='file' multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
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
