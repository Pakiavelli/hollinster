import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import CompareButton from './CompareButton.jsx';
import Modal from './Modal.jsx';

export default function Card({ current, product }) {
  const [category, setCategory] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [rating, setRating] = useState();
  const [modal, setModal] = useState(false);
  const [productData, setProductData] = useState([]);
  const [productStyleData, setProductStyleData] = useState([]);
  const [productReviewData, setProductReviewData] = useState([]);

  let defaultPrice = 0;

  const averageRating = (reviewResults) => {
    let ratings = 0;
    let totalRatings = 0;
    if (reviewResults.length < 1) {
      return 'No Rating Available';
    }
    for (let i = 0; i < reviewResults.length; i += 1) {
      if (reviewResults[i].rating !== undefined) {
        ratings += reviewResults[i].rating;
        totalRatings += 1;
      }
    }
    return ratings / totalRatings;
  };

  const checkPrice = (stylesResults) => {
    const defaultStyle = stylesResults.findIndex((element) => element['default?'] === true);
    const style = stylesResults[defaultStyle];
    if (defaultStyle === -1) {
      return defaultPrice;
    }
    return (style.sale_price ? style.sale_price : style.original_price);
  };

  const showComparison = () => {
    setModal(!modal);
  };

  const getProduct = () => axios.get(`/products/${product}`);

  const getProductStyles = () => axios.get(`/products/${product}/styles`);

  const getProductReviews = () => axios.get(`/reviews/${product}`);

  useEffect(() => {
    Promise.all([getProduct(), getProductStyles(), getProductReviews()])
      .then((response) => {
        defaultPrice = response[0].data.default_price;
        setProductData(response[0].data);
        setProductStyleData(response[1].data);
        setProductReviewData(response[2].data);
        setCategory(response[0].data.category);
        setName(response[0].data.name);
        // setDefaultPrice(response[0].data.default_price);
        // setPrice(response[1].data.results[0].original_price);
        setPrice(checkPrice(response[1].data.results));
        setImage(response[1].data.results[0].photos[0].url);
        setRating(averageRating(response[2].data.results));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   axios.get(`/products/${product}`)
  //     .then((response) => {
  //       setCategory(response.data.category);
  //       setName(response.data.name);
  //       setDefaultPrice(response.data.default_price);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   // need to implement sale price behavior
  //   axios.get(`/products/${product}/styles`)
  //     .then((response) => {
  //       // setPrice(response.data.results[0].original_price);
  //       setPrice(checkPrice(response.data.results));
  //       setImage(response.data.results[0].photos[0].url);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   axios.get(`/reviews/${product}`)
  //     .then((response) => {
  //       setRating(averageRating(response.data.results));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div>
      {modal ? <Modal current={current} productData={productData} /> : null}
      <CompareButton showComparison={showComparison} />
      <img src={image} alt={`A representation of ${name}`} />
      <div>{category}</div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{rating}</div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.number,
};

Card.defaultProps = {
  product: 25167,
};
