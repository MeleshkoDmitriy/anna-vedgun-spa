import { useEffect, useState } from 'react';
import { Layout } from '../../components/layout/Layout/Layout';
import styles from './BlogPage.module.scss';
import { useGetPostsQuery } from '../../store/slice/api/apiSlice';
import { TPost } from '../../types/types';
import { PostsList } from '../../components/PostsList/PostsList';
import { defaultPosts } from '../../constants/Contacts';

export const BlogPage = () => {
  const [posts, setPosts] = useState<TPost[] | []>(defaultPosts);

  const { data, isLoading } = useGetPostsQuery();

  useEffect(() => {
    if (!!data && !isLoading) {
      setPosts(data);
    }
  }, [data]);

  return (
    <Layout>
      <PostsList posts={posts} />
    </Layout>
  );
};
