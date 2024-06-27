import { FC, useState } from 'react';
import { TPost } from '../../types/types';
import { Post } from '../Post/Post';
import styles from './PostsList.module.scss';

interface PostsListProps {
  posts: TPost[];
}

export const PostsList: FC<PostsListProps> = ({
  posts
}) => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className={styles.wrapper}>
      {posts.length > 0 &&
        posts?.map((post: TPost) => (
          <Post
            key={post.id}
            {...post}
            onClick={() =>
              post.id === openId ? setOpenId(null) : setOpenId(post.id)
            }
            isOpen={post.id === openId}
          />
        ))}
    </section>
  );
};
