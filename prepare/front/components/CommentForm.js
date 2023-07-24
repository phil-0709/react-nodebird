import { Form } from 'antd';
import { useCallback } from 'react';
import { useInput } from '../hooks/useInput';

const CommentForm = (props) => {
  const { post } = props;
  const [commentText, setCommentText] = useInput('');
  const onSubmitComment = useCallback(() => {
    console.log(post);
  }, [post, commentText]);

  return <Form onFinish={onSubmitComment}>폼</Form>;
};

export default CommentForm;
