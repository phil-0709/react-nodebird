import AppLayout from '../components/AppLayout';
import { useSelector } from 'react-redux';

const home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPost } = useSelector((state) => state.post);
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPost.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default home;
