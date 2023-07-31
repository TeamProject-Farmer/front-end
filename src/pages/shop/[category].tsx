// import { ReactElement } from 'react';
// import type { NextPageWithLayout } from "@pages/_app";
// import Layout from "@pages/layout";
// import ShopDetail from "@components/Shop/ShopDetail";
// import { getProductList } from 'src/apis/shop/product';
// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
// import { ShopDetailPageProps } from 'src/types/shop/types';

// const CategoryPage = ({
//   productList,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
//   return <ShopDetail productList = {productList}/>;
// }
// CategoryPage.getLayout = (page: ReactElement) => {
//   return <Layout>{page}</Layout>;
// };

// export const getServerSideProps: GetServerSideProps<
// ShopDetailPageProps
// > = async () => {
//   const productList = await getProductList();
//   return { props: { productList } };
// };
// export default CategoryPage;

import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import Layout from "@pages/layout";
import ShopDetail from "@components/Shop/ShopDetail";

const CategoryPage: NextPageWithLayout = () => {
  return <ShopDetail />;
}
CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;