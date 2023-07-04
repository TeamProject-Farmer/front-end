import React from 'react'
import Layout from '@components/Search/Layout'
import SearchContainer from '@components/Search/SearchContainer'
import SearchUtils from '@components/Search/SearchUtils'
import SearchContent from '@components/Search/SearchContent'

const Search = () => {
  return (
    <Layout>
      <SearchContainer/>
      <SearchUtils/>
      <SearchContent/>
    </Layout>
  )
}

export default Search
