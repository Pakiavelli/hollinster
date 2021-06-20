/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import dayjs from 'dayjs';
import Star from '../../overview/Info/Star.jsx';
// import ReviewPics.jsx from './ReviewPics.jsx';

class ReviewItem extends React.Component {
  render() {
    let recommendation;
    if (this.props.review.recommend) {
      recommendation = '✓ I recommend this product.';
    } else {
      recommendation = '× I do not recommend this product.';
    }

    let reviewDate;
    if (this.props.review) {
      reviewDate = dayjs(this.props.review.date).format('MMMM, D, YYYY');
    }

    return (
      <div className="review-item-div">
        <div className="review-item-header">
          <Star ratings={{ [this.props.review.rating]: '1' }} results={[{ display: 'none' }]} />
          <p>{this.props.review.reviewer_name}, {reviewDate}</p>
        </div>
        <h4>{this.props.review.summary}</h4>
        <p>{this.props.review.body}</p>
        <p>{recommendation}</p>
        {/* Add code here to render pics */}
        <p>Helpful? Yes ({this.props.review.helpfulness}) | Report</p>
      </div>
    );
  }
}

export default ReviewItem;
