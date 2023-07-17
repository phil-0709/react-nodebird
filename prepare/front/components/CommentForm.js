import { Form } from 'antd';
import { useCallback } from 'react';
import { useState } from 'react';

const CommentForm = (props) => {
  const { post } = props;
  const [commentText, setCommentText] = useState('');
  const onSubmitComment = useCallback(() => {
    console.log(post);
  }, [post, commentText]);

  return <Form onFinish={onSubmitComment}>폼</Form>;
};

export default CommentForm;
