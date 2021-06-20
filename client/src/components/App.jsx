import React, { useState } from 'react';
import styled from 'styled-components';
import Overview from './overview/Overview.jsx';
import Related from './related/Related.jsx';
import Question from './question-answer/Question.jsx';
import RatingsReviews from './ratings-reviews/ratings-reviews.jsx';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const Body = styled.div`
  padding-left: 12%;
  padding-right: 12%;
  background-color: ${(props) => (props.current ? '#F5F4F2' : '121212')};
  color: ${(props) => (props.current ? '#292A33' : '#F5F4F2')};
`;

const LogoBar = styled.h1`
  font-family: 'Staatliches';
  background-color: silver;
  padding: 2%;
`;

const KangaImg = styled.img`
  height: 3%;
`;

const Search = styled.span`
  margin-left: 72%;
`;

const SearchLine = styled.input`
  display: inline;
  width: 9%;
  margin: 1%;
  border: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  font-size: 16px;
  &::placeholder {
    color: silver;
  }
  &:focus {
    outline: none;
}
`;

const SearchImg = styled.img`
  height: 2.5%;
`;

const LightButton = styled.button`
  padding: 0.35em 1.2em;
  border: 0.1em solid black;
  margin: 0 0.3em 0. 3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto',sans-serif;
  font-weight: 800;
  background-color: grey;
  color: black;
  text-align: center;
  transition: all 0.2s;
  &:hover{
    color: #000000;
    background-color: #303030;
    }
`;
const DarkButton = styled.button`
  padding:0.35em 1.2em;
  border:0.1em solid #FFFFFF;
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:900;
  color:#FFFFFF;
  text-align: center;
  transition: all 0.2s;
  &:hover{
    color:#000000;
    background-color:#FFFFFF;
    }
`;

const App = (props) => {
  const [theme, setTheme] = useState(true);
  const [productID, setProductID] = useState(25167);

  const switchProduct = () => {
    setProductID(product);
  };

  const onClickTheme = () => {
    setTheme(!theme);
  };

  return (
    <Body current={theme}>
      <LogoBar>
        <KangaImg src="./kangaroo.png" alt="kanga" />
        HOLLINSTER
        <Search>
          <SearchLine placeholder="Search..." />
          <SearchImg src="./assets/loupe.png" />
        </Search>
      </LogoBar>
      {theme ? <LightButton type="button" onClick={onClickTheme}>Go Dark</LightButton> : <DarkButton type="button" onClick={onClickTheme}>Light it up!</DarkButton>}
      <Overview productID={productID} />
      <Related productID={productID} setProductID={setProductID} switchProduct={switchProduct} />
      <Question productID={productID} />
      <RatingsReviews productID={productID} />
      <div>
        Icons made by
        <a href="https://www.freepik.com" title="Freepik">Freepik</a>
        {' '}
        from
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </Body>
  );
};

export default App;
