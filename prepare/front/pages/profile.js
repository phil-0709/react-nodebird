import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import FollowerList from '../components/FollowerList';
import FollowingList from '../components/FollowingList';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
  const followerList = [
    { nickname: '제로초' },
    { nickname: '로드킬' },
    { nickname: '양념치킨' },
  ];
  const followingList = [
    { nickname: '제로초' },
    { nickname: '로드킬' },
    { nickname: '양념치킨' },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowerList header='팔로워 목록' data={followerList} />
        <FollowingList header='팔로잉 목록' data={followingList} />
      </AppLayout>
    </>
  );
};

export default Profile;
