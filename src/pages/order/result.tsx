import React from 'react';
import type { NextPageWithLayout } from '@pages/_app';
import { ReactElement } from 'react';
import Layout from '@pages/layout';
import NestedLayout from '@components/Order/NestedLayout';
const orderResultPage: NextPageWithLayout = () => {
  return <div>안녕</div>;
};

export default orderResultPage;

orderResultPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
