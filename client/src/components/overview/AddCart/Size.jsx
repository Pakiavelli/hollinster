import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SizeSelector = styled.div`
  height: 20%;
  width: 50%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
  padding: 5% 1%;
  text-align: center;
  border: 1px solid black;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const HeaderContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: bold;
`;
const SizeHeader = styled.li`

`;

const SizeDropDown = styled.div`
  border: 1px solid black;
  padding: 0;
  margin-top: 8%;
  z-index: 2;
  background-color: #F5F4F2;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
  overflow: scroll;
  position: absolute;
  width: 90%;
  max-height: 300px;
`;

const SizeOptions = styled.li`
  list-style: none;
  padding: 3%;
  margin: 1%;
  width: 90%;
  border: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.14);
  }
`;

const ListContainer = styled.div`
`;
const ArrowImg = styled.img`
  height: 13px;
  margin-left: 30%;
`;

function Size({ skus, useCurrentSize, setShowError }) {
  const [isOpen, setIsOpen] = useState(false);
  let imageSource = './assets/down-chevron.png';
  if (!isOpen) {
    imageSource = './assets/down-chevron.png';
  } else {
    imageSource = './assets/up-chevron.png';
  }

  const clickOption = (event) => {
    useCurrentSize(event.target.value);
    setIsOpen(false);
    setShowError(false);
  };

  const getSizes = () => (Object.keys(skus).map((key) => {
    if (skus[key].size) {
      return (
        <SizeOptions value={key} key={key} onClick={clickOption}>
          {skus[key].size}
        </SizeOptions>
      );
    }
    return null;
  }));
  const getCurrentSize = (event) => {
    if (event.target.value !== 'OUT OF STOCK') {
      useCurrentSize(event.target.value);
    }
  };

  if (Object.keys(skus).length === 0) {
    return ('OUT OF STOCK');
  }

  if (!isOpen) {
    return (
      <SizeSelector className="size-selector">
        <Container>
          <HeaderContainer>
            <SizeHeader defaultValue="select" onClick={() => { setIsOpen(!isOpen); }}>
              SELECT SIZE
              <ArrowImg src={imageSource} alt="arrows" />
            </SizeHeader>
          </HeaderContainer>
        </Container>
      </SizeSelector>
    );
  }

  return (
    <SizeSelector className="size-selector">
      <Container>
        <HeaderContainer>
          <SizeHeader defaultValue="select" onClick={() => { setIsOpen(!isOpen); }}>
            SELECT SIZE
            <ArrowImg src={imageSource} alt="arrows" />
          </SizeHeader>
        </HeaderContainer>
        <ListContainer>
          <SizeDropDown onChange={getCurrentSize} data-testid="selector" isOpen={isOpen}>
            {getSizes()}
          </SizeDropDown>
        </ListContainer>
      </Container>
    </SizeSelector>
  );
}

Size.propTypes = {
  skus: PropTypes.shape({}),
  useCurrentSize: PropTypes.func,
  showError: PropTypes.bool,
};

Size.defaultProps = {
  skus: {},
  useCurrentSize: () => {},
  showError: false,
};

export default Size;
