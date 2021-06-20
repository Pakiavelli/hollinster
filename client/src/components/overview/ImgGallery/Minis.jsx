import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Mini from './Mini.jsx';

const ThumbnailsBox = styled.div`
  margin-right: 10%;
`;
const UpButton = styled.img`
  font-size: 30px;
  margin: 10% 43%;
  width: 20%;
  &:hover {
    cursor: pointer;
  }
`;
const DownButton = styled.img`
  font-size: 30px;
  margin: 10% 43%;
  width: 20%;
  &:hover {
    cursor: pointer;
  }
`;

function Minis(props) {
  const {
    minis, currentImg, onClickThu, leftClicked, rightClicked,
  } = props;
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(false);
  const [array, setArray] = useState(minis);
  const [startI, setStartI] = useState(0);
  const [endI, setEndI] = useState(7);
  const window = 7;

  useEffect(() => {
    setArray(minis);
    setShowUp(false);
    setShowDown(false);
    setStartI(0);
    setEndI(7);
  }, [minis]);

  useEffect(() => {
    if (array.length > window) {
      setArray(minis.slice(startI, endI));
      if (!showDown) {
        setShowDown(true);
      }
    }
  }, [array]);

  const onClickUp = () => {
    if (startI - (window - 1) <= 0) {
      setStartI(0);
      setArray(minis.slice(0, endI - (window - 1)));
      setShowUp(false);
      setShowDown(true);
    } else {
      setStartI(startI - window - 1);
      setArray(minis.slice(startI - window - 1, endI - (window - 1)));
      setShowUp(true);
      setShowDown(true);
    }
    setEndI(endI - (window - 1));
  };

  useEffect(() => {
    if (minis.length > window) {
      if (array.indexOf(currentImg) === -1) {
        onClickUp();
      }
    }
  }, [leftClicked]);

  const onClickDown = () => {
    setStartI(startI + window - 1);
    setEndI(endI + window - 1);
    setArray(minis.slice(startI + window - 1, endI + window - 1));

    if (endI + window - 1 > minis.length) {
      setShowUp(true);
      setShowDown(false);
    } else {
      setShowUp(true);
      setShowDown(false);
    }
  };

  useEffect(() => {
    if (minis.length > window) {
      if (array.indexOf(currentImg) === -1) {
        onClickDown();
      }
    }
  }, [rightClicked]);

  return (
    <ThumbnailsBox>
      {showUp ? <UpButton className="up-button" onClick={onClickUp} src="./assets/up-chevron.png" alt="up-arrow" /> : <></>}
      {array.map((mini) => (
        <Mini className="the-mini" mini={mini} key={mini.url} currentImg={currentImg} i={minis.indexOf(mini)} onClickThu={onClickThu} />
      ))}
      {showDown ? <DownButton className="down-button" onClick={onClickDown} src="./assets/down-chevron.png" alt="down-arrow" /> : <></>}
    </ThumbnailsBox>
  );
}

export default Minis;

Minis.propTypes = {
  minis: PropTypes.instanceOf(Array),
  currentImg: PropTypes.shape({}),
  onClickThu: PropTypes.func,
};

Minis.defaultProps = {
  minis: [],
  currentImg: {},
  onClickThu: () => {},
};
