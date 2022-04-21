import React, { FC } from 'react';
import { useGetPostsQuery } from './service/studentsApi';

export const Test: FC = React.memo(() => {
  const { data, error, isLoading } = useGetPostsQuery();

  const hasntPost = !isLoading && data?.length === 0;

  console.log(data);

  return (
    <>

      {isLoading && <h2>Loading</h2>}
      {data?.map(post => (
        <h2>{post.title}</h2>
      ))}
      {hasntPost && <h2>Has not posts</h2>}
      {error && <h2>Uppss...</h2>}
    </>
  );
});
