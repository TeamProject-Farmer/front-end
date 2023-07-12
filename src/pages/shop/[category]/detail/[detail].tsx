import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import Layout from "@pages/layout";
import DetailPage from "@components/Shop/DetailPage";

const CategoryDetailPage: NextPageWithLayout = () => {
  return <DetailPage />;
}

CategoryDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CategoryDetailPage;