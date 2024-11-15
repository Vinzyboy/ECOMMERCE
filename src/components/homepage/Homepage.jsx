import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
import NewCollection from './NewCollection'
import CardItem from './CardItem'

const Homepage = () => {
  return (
    <>
      <Header />
          <Banner />
          <NewCollection />
      <Footer />
    </>
  );
}

export default Homepage
