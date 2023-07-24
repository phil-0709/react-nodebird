import { Form, Input, Button } from 'antd';
import { useCallback } from 'react';
import useInput from '../hooks/useInput';

const CommentForm = (props) => {
  const { post } = props;
  const [commentText, onChangeCommentText] = useInput('');
  const onSubmitComment = useCallback(() => {
    console.log(post);
  }, [post, commentText]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} />
        <Button type='primary' htmlType='submit'>
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;
