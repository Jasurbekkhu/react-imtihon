import React from 'react'
import Product from '../../components/product/Product';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
function Home() {
  return (
    <div>
      <Banner />
      <div className="container">
        <Product admin={false} />
      </div>
      <Footer />
    </div>
  )
}

export default Home