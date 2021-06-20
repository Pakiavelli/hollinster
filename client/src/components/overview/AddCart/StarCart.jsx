import React from 'react';
import styled from 'styled-components';

const StarBox = styled.div`
  border: 1px solid black;
  margin-left: 5%;
  padding: 3.4% 4%;
  text-align: center;
  width: 5%;
  height: 45%;
  &:hover {
    cursor: pointer;
    color: rgb(255,196,12);
    background-color: rgba(0, 0, 0, 0.14);
  }
`;

function StarCart() {
  return (
    <StarBox>
      &#x2606;
    </StarBox>
  );
}

export default StarCart;
