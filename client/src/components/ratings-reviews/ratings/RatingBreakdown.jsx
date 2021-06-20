/* eslint-disable arrow-body-style */
/* eslint-disable no-else-return */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class RatingBreakdown extends React.Component {
  render() {
    const ratingItemsArray = Object.entries(this.props.breakdown);

    let totalRatings = false;
    for (let i = 0; i < ratingItemsArray.length; i++) {
      if (ratingItemsArray[i][1].value > 0) {
        totalRatings = true;
        break;
      }
    }

    const getRatingItems = ratingItemsArray.map((item) => {
      return (
        <p key={item[1].id}>{`${item[0]}: ${Number(item[1].value).toFixed(1)}`} </p>
      );
    });

    if (!this.props.breakdown || !totalRatings) {
      return (
        <div className="rating-categories">
          <h3>No ratings yet</h3>
          <h5>Be the first to recommend this product!</h5>
        </div>
      );
    } else {
      return (
        <div className="rating-categories">
          <h3>Ratings</h3>
          {getRatingItems}
        </div>
      );
    }
  }
}

export default RatingBreakdown;
