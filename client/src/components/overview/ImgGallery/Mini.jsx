import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Thumbnail = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
const ThumbnailBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) => (props.thumbnail_url === props.currentImg.thumbnail_url ? 'solid rgb(72,72,72) 5px' : 'solid rgb(232,232,232)')};
  outline: solid rgb(72,72,72) 1px;
  padding: 5%;
  width: 50px;
  height: 50px;
  margin: 17% 0%;
`;

function Mini(props) {
  const { mini, currentImg, onClickThu, i } = props;
  const { thumbnail_url } = mini;
  const onClickImgDiv = () => {
    onClickThu(mini, i);
  };

  return (
    <ThumbnailBox className="minithumbnail" onClick={onClickImgDiv} thumbnail_url={thumbnail_url} currentImg={currentImg}>
      <Thumbnail className="miniimage" src={thumbnail_url} alt={thumbnail_url} />
    </ThumbnailBox>
  );
}

export default Mini;

Mini.propTypes = {
  mini: PropTypes.object,
  onClickThu: PropTypes.func,
  currentImg: PropTypes.object,
  i: PropTypes.number,
};
