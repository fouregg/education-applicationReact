import React, { lazy, Suspense } from 'react';

const LazyTestString = lazy(() => import('./TestString'));

const TestString = props => (
  <Suspense fallback={null}>
    <LazyTestString {...props} />
  </Suspense>
);

export default TestString;
