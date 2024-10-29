import React, { lazy, Suspense } from 'react';

const LazyUserCard = lazy(() => import('./UserCard'));

const UserCard = props => (
  <Suspense fallback={null}>
    <LazyUserCard {...props} />
  </Suspense>
);

export default UserCard;
