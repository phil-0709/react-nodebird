import { Card, Popover, Avatar } from 'antd';
import PropTypes from 'prop-types';
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  HeartTwoTone,
  EllipsisOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import PostImages from './PostImages';
import { Button } from 'antd';
import Content from './Content';
import Buttons from './Buttons';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useCallback, useState } from 'react';

const container = css`
  margin-bottom: 10px;
`;

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);
  const { me } = useSelector((state) => state.user);
  const id = me?.id;
  return (
    <div css={container}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key='retweet' />,
          liked ? (
            <HeartTwoTone
              twoToneColor='#eb2f96'
              key='heart-liked'
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key='heart' onClick={onToggleLike} />
          ),
          <MessageOutlined key='comment' onClick={onToggleComment} />,
          <Popover
            key='more'
            content={[
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type='danger'>삭제</Button>
                  </>
                ) : (
                  <>
                    <Button>신고</Button>
                  </>
                )}
              </Button.Group>,
            ]}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        {/* <Image /> */}
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
        <Buttons></Buttons>
      </Card>
      {commentFormOpened && <div>댓글 부분</div>}
      {/* <CommentForm />
      <Comments /> */}
    </div>
  );
};

PostCard.prototype = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
