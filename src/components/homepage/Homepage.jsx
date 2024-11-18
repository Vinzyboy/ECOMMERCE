import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
import NewCollection from './NewCollection'
import Wedding from './Wedding'
import Category from './Category'

const Homepage = () => {
  return (
    <>
      <Header />
          <Banner />
      <NewCollection />
      <Wedding />
      <Category/>
      <Footer />
    </>
  );
}

export default Homepage
