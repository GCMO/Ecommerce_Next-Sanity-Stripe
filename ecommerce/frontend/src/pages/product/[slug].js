import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  if (!product) {
    return <div>Product not found</div>; // just to see if sanity is talking to the frontend
  }
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            <p>(20)</p>
          </div>

          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">SEK {price}</p>

          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>

          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>

        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>

    </div>
  )
}
// getStaticPaths is used to generate all the possible paths for the page
// getStaticProps is used to fetch the data for a single product
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;
  // fetch all products
  const products = await client.fetch(query);
  // create paths with slug
  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));
  // fallback: false means that "not found" pages will be 404.
  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]{name, details, price, "slug": slug.current, image}'

  const [product, products] = await Promise.all([
    client.fetch(query),
    client.fetch(productsQuery)
  ]);

  return {
    props: { product, products }
  }
}

export default ProductDetails