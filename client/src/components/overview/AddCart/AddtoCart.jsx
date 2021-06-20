import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

const AddtoBag = styled.div`
  width: 80%;
  height: 90%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
  font-size: 16px;
`;

const BagButton = styled.button`
  background-color: transparent;
  border: 1px solid black;
  padding: 1% 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  width: 100%;
  height: 100%;
  font-weight: bold
`;

const Plus = styled.span`
  margin-left: 54%;
  font-size: 20px;
  font-weight: normal;
`;

function AddtoCart({
  currentSize, skus, setShowError, selectedQ,
}) {
  const addItem = () => {
    if (currentSize === 'SELECT SIZE') {
      setShowError(true);
    } else {
      axios.post('/cart', { sku_id: currentSize, count: selectedQ })
        .then(() => {
        })
        .catch(() => {
        });
    }
  };

  const checkSkus = () => {
    if (skus) {
      if (Object.keys(skus).length > 0) {
        return true;
      }
    }
    return false;
  };
  return (
    <AddtoBag onClick={addItem} className="add-to-bag">
      {checkSkus() ? (
        <BagButton type="button" className="bag-button">
          ADD TO BAG
          <Plus>+</Plus>
        </BagButton>
      ) : <></>}
    </AddtoBag>
  );
}

AddtoCart.propTypes = {
  currentSize: PropTypes.string,
  skus: PropTypes.shape({}),
  setShowError: PropTypes.func,
  selectedQ: PropTypes.string,
};

AddtoCart.defaultProps = {
  currentSize: 0,
  skus: {},
  setShowError: () => {},
  selectedQ: '1',
};

export default AddtoCart;
