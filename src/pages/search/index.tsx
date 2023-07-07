import React from 'react'
import Layout from '@pages/layout'
import NestedLayout from '@components/Search/Layout'
import SearchContainer from '@components/Search/SearchContainer'
import SearchUtils from '@components/Search/SearchUtils'
import SearchContent from '@components/Search/SearchContent'
import type { NextPageWithLayout } from '@pages/_app'
import { ReactElement } from 'react';

const SearchPage: NextPageWithLayout = () => {
  return (
    <>
      <SearchContainer/>
      <SearchUtils/>
      <SearchContent/>
    </>
  )
}

export default SearchPage

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>
      {page}
      </NestedLayout>
    </Layout>
  )
}