import { Form, Input, Button } from 'antd';
import { useCallback } from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CommentForm = (props) => {
  const { post } = props;
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput('');
  const onSubmitComment = useCallback(() => {
    console.log(post);
    console.log(post.id, commentText);
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

CommentForm.PropTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
