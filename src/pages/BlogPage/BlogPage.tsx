import { useState } from 'react';
import { Layout } from '../../components/layout/Layout/Layout';
import styles from './BlogPage.module.scss';
import { useGetPostsQuery } from '../../store/slice/api/apiSlice';
import { TPost } from '../../types/types';

export const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  const { data, isLoading, isError } = useGetPostsQuery();

  return (
    <Layout>
      {isLoading && <h2>Loading..</h2>}
      {data?.map((post: TPost) => (
        <div>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </div>
      ))}
    </Layout>
  );
};
