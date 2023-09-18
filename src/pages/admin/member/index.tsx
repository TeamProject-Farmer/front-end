import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import AdminLayout from '@pages/adminlayout';

const MemberPage: NextPageWithLayout = () => {
  return(<div></div>)
};

MemberPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default MemberPage;

