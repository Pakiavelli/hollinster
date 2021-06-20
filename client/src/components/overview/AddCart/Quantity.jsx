import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuantityBox = styled.div`
  border: 1px solid black;
  padding: 5%;
  margin-left: 5%;
  height: 20%;
  width: 20%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
`;

const ContainerQ = styled.div`
  position: relative;
  height: 100%;
  padding-bottom: 5%;
`;

const HeaderContQ = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: bold;
`;
const QuantHeader = styled.li`

`;

const QuantityDropDown = styled.div`
  border: 1px solid black;
  padding: 0;
  margin-top: 25%;
  right: 30%;
  z-index: 2;
  background-color: #F5F4F2;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
  overflow: scroll;
  position: absolute;
  width: 90%;
  max-height: 300px;
`;

const QuantityOptions = styled.li`
  list-style: none;
  padding: 3%;
  margin: 1%;
  width: 90%;
  border: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.14);
  }
  text-align: center;
`;

const ArrowImgQ = styled.img`
  height: 15px;
  margin-left: 50%;
`;

function Quantity({ currentSizeObj, setSelectedQ, selectedQ }) {
  const { quantity } = currentSizeObj;
  const [isOpenQ, setIsOpenQ] = useState(false);

  let imageSource = './assets/down-chevron.png';

  if (!isOpenQ) {
    imageSource = './assets/down-chevron.png';
  } else {
    imageSource = './assets/up-chevron.png';
  }
  const onClickQuantity = (event) => {
    setSelectedQ(event.target.innerText);
  };

  const getQuantities = () => {
    let num;
    const numArray = [];
    if (quantity > 15) {
      num = 15;
    } else {
      num = quantity;
    }
    let i = 1;
    while (i <= num) {
      numArray.push(
        <QuantityOptions value={i} key={i} onClick={onClickQuantity}>{i}</QuantityOptions>,
      );
      i += 1;
    }
    return numArray;
  };

  if (!quantity) {
    return (
      <QuantityBox>
        -
      </QuantityBox>
    );
  }

  if (!isOpenQ) {
    return (
      <QuantityBox onClick={() => { setIsOpenQ(!isOpenQ); }}>
        <ContainerQ>
          <HeaderContQ>
            <QuantHeader value="1" key="1">
              {selectedQ}
              <ArrowImgQ src={imageSource} alt="arrows" />
            </QuantHeader>
          </HeaderContQ>
        </ContainerQ>
      </QuantityBox>
    );
  }

  return (
    <QuantityBox onClick={() => { setIsOpenQ(!isOpenQ); }}>
      <ContainerQ>
        <HeaderContQ>
          <QuantHeader value="1" key="1">
            {selectedQ}
            <ArrowImgQ src={imageSource} alt="arrows" />
          </QuantHeader>
        </HeaderContQ>
        <QuantityDropDown className="quantity-selector">
          {getQuantities()}
        </QuantityDropDown>
      </ContainerQ>
    </QuantityBox>
  );
}

Quantity.propTypes = {
  currentSizeObj: PropTypes.shape({
    quantity: PropTypes.number,
    size: PropTypes.string,
  }),
};

Quantity.defaultProps = {
  currentSizeObj: { quantity: 0 },
};

export default Quantity;
