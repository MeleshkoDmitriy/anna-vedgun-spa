import { FC } from 'react';
import { TPost } from '../../types/types';
import { Post } from '../Post/Post';
import styles from './PostsList.module.scss';

interface PostsListProps {
  posts: TPost[];
  isLoading: boolean;
  isError: boolean;
}

export const PostsList: FC<PostsListProps> = ({
  posts,
  isLoading,
  isError,
}) => {
  return (
    <section className={styles.wrapper}>
      {isLoading && <h2>Loading..</h2>}
      {posts.length &&
        posts?.map((post: TPost) => <Post key={post.id} {...post} />)}
    </section>
  );
};
