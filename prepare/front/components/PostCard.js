import { Card, Popover } from 'antd';
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
} from '@ant-design';

const PostCard = ({ post }) => {
  return (
    <div>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key='retweet' />,
          <HeartOutlined key='heart' />,
          <MessageOutlined key='comment' />,
          <Popover
            key='more'
            content={[
              <Button.Group>
                <Button>수정</Button>
                <Button type='danger'>삭제</Button>
                <Button>신고</Button>
              </Button.Group>,
            ]}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Image />
        <Content />
        <Buttons></Buttons>
      </Card>
      <CommentForm />
      <Comments />
    </div>
  );
};

export default PostCard;
