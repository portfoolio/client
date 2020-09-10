import React from 'react';
import Helmet from 'react-helmet';

const APP_NAME = process.env.REACT_APP_NAME;

export default (Component: any, { title }: { title: string }) => (props: any) => {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} | ${APP_NAME}` : APP_NAME}</title>
    </Helmet>
    <Component {...props} />
  </>
);
};
