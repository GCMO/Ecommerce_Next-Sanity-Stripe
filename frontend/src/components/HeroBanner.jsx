import React from 'react';
import Link from 'next/link';

import { urlFor } from '../../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <p className='hero-banner-text'>Our HASS avocados have been carefully bred and selected for their taste, size, shelf life, high yield and year-round harvesting</p>
        <h3>{heroBanner.midText}</h3>
        <br/>
        {/* <h1>{heroBanner.largeText1}</h1> */}
        <img src={urlFor(heroBanner.image)} alt='Avocado' className='hero-banner-image'/>
          <div className='desc'>
            {/* <h5>Description</h5> */}
            <p>{heroBanner.desc}</p>
          </div>
      </div>
      <div>
        <Link href={'/product/${heroBanner.product}'}>
          <button type='button'>{heroBanner.buttonText}</button>
        </Link>
      </div>
    </div>
  )
}

export default HeroBanner
