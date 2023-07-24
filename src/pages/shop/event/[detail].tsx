import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import Layout from "@pages/layout";
import EventDetail from "@components/Shop/EventDetail";

const EventDetailPage: NextPageWithLayout = () => {
  return <EventDetail></EventDetail>;
}

EventDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};


export default EventDetailPage;