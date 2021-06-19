import React, { useState } from 'react';
import Overview from './overview/Overview.jsx';
import Related from './related/Related.jsx';
import Question from './question-answer/Question.jsx';
import RatingsReviews from './ratings-reviews/ratings-reviews.jsx';

const App = (props) => {
  const [theme, setTheme] = useState(true);
  const [productID, setProductID] = useState(25174);

  const switchProduct = () => {
    setProductID(product);
  };

  const onClickTheme = () => {
    setTheme(!theme);
  };

  return (
    <Body current={theme} >
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
      <Related productID={productID} />
      <Question productID={productID} />
      <RatingsReviews productID={productID} />
    </Body>
  );
};

// attribute free icon flaticon at bottom of website: <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default App;
