import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props: any) => {
  return (
    <ContentLoader
      speed={2}
      width={2801}
      height={450}
      viewBox="0 0 2801 450"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="139" cy="124" r="120" />
      <rect x="0" y="263" rx="15" ry="15" width="280" height="23" />
      <rect x="0" y="311" rx="10" ry="10" width="280" height="88" />
      <rect x="0" y="432" rx="10" ry="10" width="95" height="30" />
      <rect x="124" y="425" rx="25" ry="25" width="153" height="45" />
    </ContentLoader>
  );
};

export default Skeleton;
