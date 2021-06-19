import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import List from './List.jsx';
import YourOutfit from './YourOutfit.jsx';

const Carousel = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  justify-content: left;
  align-items: center;
  scroll-behavior: smooth;
  width: 18rem;
  height: 36rem;
  margin: 1rem;
`;

const CarouselHeading = styled.h1`
  margin: 1rem;
`;

export default function Related({ productID, setProductID }) {
  const [current, setCurrent] = useState(productID);
  const [related, setRelated] = useState([]);
  const [outfit, setOutfit] = useState([]);

  useEffect(() => {
    const storedOutfit = JSON.parse(localStorage.getItem('outfit'));
    if (storedOutfit) {
      setOutfit(storedOutfit);
    }
  }, []);

  useEffect(() => {
    axios.get(`/products/${productID}`)
      .then((response) => {
        setCurrent(response.data);
      });
    axios.get(`/products/${productID}/related`)
      .then((response) => {
        const uniqueIds = [...new Set(response.data)];
        setRelated(uniqueIds);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productID]);

  const addToOutfit = () => {
    const updatedOutfit = [...outfit];
    if (!updatedOutfit.includes(productID)) {
      updatedOutfit.push(productID);
      setOutfit(updatedOutfit);
      localStorage.setItem('outfit', JSON.stringify(updatedOutfit));
    }
  };

  const removeFromOutfit = (id) => {
    const updatedOutfit = [...outfit];
    const index = updatedOutfit.findIndex((element) => element === id);
    if (index !== -1) {
      updatedOutfit.splice(index, 1);
      setOutfit(updatedOutfit);
      localStorage.setItem('outfit', JSON.stringify(updatedOutfit));
    }
  };

  return (
    <>
      <CarouselHeading>RELATED PRODUCTS</CarouselHeading>
      <Carousel>
        <List
          current={current}
          related={related}
          productID={productID}
          setProductID={setProductID}
        />
      </Carousel>
      <CarouselHeading>YOUR OUTFIT</CarouselHeading>
      <Carousel>
        <YourOutfit
          current={current}
          outfit={outfit}
          productID={productID}
          addToOutfit={addToOutfit}
          removeFromOutfit={removeFromOutfit}
        />
      </Carousel>
    </>
  );
}

Related.propTypes = {
  productID: PropTypes.number.isRequired,
  setProductID: PropTypes.func.isRequired,
};
