import React, { FC } from 'react';
import { useGetPostsQuery } from './service/studentsApi';
import { Test } from './Test';
import './App.scss';

export const App: FC = React.memo(() => {
  const { data, error, isLoading } = useGetPostsQuery();

  const hasntPost = !isLoading && data?.length === 0;

  console.log(data);

  return (
    <>
      {!isLoading && data?.length && <Test />}
      {isLoading && <h2>Loading</h2>}
      {data?.map(post => (
        <h2>{post.title}</h2>
      ))}
      {hasntPost && <h2>Has not posts</h2>}
      {error && <h2>Uppss...</h2>}
    </>
  );
});
