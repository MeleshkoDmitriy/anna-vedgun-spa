import { useEffect, useState } from 'react';
import { Layout } from '../../components/layout/Layout/Layout';
import styles from './BlogPage.module.scss';
import { useGetPostsQuery } from '../../store/slice/api/apiSlice';
import { TPost } from '../../types/types';
import { PostsList } from '../../components/PostsList/PostsList';

export const BlogPage = () => {
  const [posts, setPosts] = useState<TPost[] | []>([]);

  const { data, isLoading, isError } = useGetPostsQuery();

  useEffect(() => {
    if (data && !isLoading) {
      setPosts(data);
    }
  }, [data]);

  return (
    <Layout>
      <PostsList posts={posts} isLoading={isLoading} isError={isError} />
    </Layout>
  );
};

// {isLoading && <h2>Loading..</h2>}
// {data?.map((post: TPost) => (
//   <div>
//     <h2>{post.title}</h2>
//     <p>{post.text}</p>
//   </div>
// ))}
