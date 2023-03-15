import React from 'react'
import { client } from '../../lib/client'
import {Cart, Footer, FooterBanner, HeroBanner, Navbar, Product, Layout} from '../components'

const Home = ({ products, bannerData }) => {

  return (
    <>
     <HeroBanner heroBanner={bannerData.length && bannerData[0]}  /> 
     {console.log(bannerData)}

     <div className='products-heading'> 
        <h2>Avocado's Life</h2>
        <p>Freshest Avos on the market</p>
     </div>
     
     <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product} />)}
     </div>

     <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}

// Fetch data from Sanity 
// and pass it to the Home component as props
export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`
  const products = await client.fetch(query)
  
  const bannerQuery = `*[_type == "banner"]`
  const bannerData = await client.fetch(bannerQuery)

  return { 
    props: { products, bannerData }
  }
};

export default Home
