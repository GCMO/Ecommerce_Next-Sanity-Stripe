import React from 'react'
import Link from 'next/link'
import { urlFor } from '../../lib/client' // This is a custom function to import the image from the Sanity 

const FooterBanner = ({ footerBanner:{discount, largeText1, largeText2, saleTime, smallText, midText, product, image, buttonText, desc } }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        
        <div className='left'>
          <h3>{largeText1}</h3>
          <p>{discount}</p>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
          <Link href={'/product/${product}'}>
            <button type='button' >{buttonText}</button>
          </Link>        
        </div>

        <div className='right'>
          <p>{desc}</p>
          <h3>{midText}</h3>
          <p>{smallText}</p>
        </div>
        {/* <img src={urlFor(image)} className='footer-banner-image' /> */}
      
      </div>
    </div>
  )
}

export default FooterBanner
