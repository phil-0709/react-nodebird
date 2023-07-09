import { Card } from 'antd';

const PostCard = ({ post }) => {
  return (
    <div>
      <Card cover={post.Images[0] && <PostImages images={post.Images} />}>
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
