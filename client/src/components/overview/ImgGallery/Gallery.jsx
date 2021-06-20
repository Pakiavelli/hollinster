import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Large from './Large.jsx';

const GalleryBox = styled.div`
  height: calc(70vh - 16px);
  width: ${(props) => (props.expand ? '100%' : '60%')};
  overflow: hidden;
  padding: 2%;
  padding-left: 1%;
`;
const Expand = styled.img`
  font-size: 40px;
  float: right;
  min-height: 20px;
  min-width: 20px;
  &:hover {
    cursor: pointer;
  }
`;

function Gallery({ styles, expand, onClickExp }) {
  return (
    <GalleryBox className="gallery" expand={expand}>
      <Expand onClick={onClickExp} className="collapsible" src="./assets/fullscreen.png" />
      <Large
        defaultStyle={styles}
      />
    </GalleryBox>
  );
}

export default Gallery;

Gallery.propTypes = {
  styles: PropTypes.shape({}),
  expand: PropTypes.bool,
  onClickExp: PropTypes.func,
};

Gallery.defaultProps = {
  styles: {
    style_id: 142825,
    name: '',
    original_price: '',
    sale_price: null,
    'default?': true,
    photos: [
      {
        thumbnail_url: '',
        url: '',
      },
    ],
  },
  expand: false,
  onClickExp: () => {},
};
