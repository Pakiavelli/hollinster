import React, { useState } from 'react';
import styled from 'styled-components';
import { sampleAnswersList } from './sampleData.js';

const IndividualAnswerRow = styled.div`
`;

const MoreAnswersButton = styled.button`
  border: none;
`;

const UnderlinedButtons = styled.button`
  border: none;
  text-decoration: underline;
`;
export default function IndividualAnswer(props) {
  const listOfAnswers = [];
  Object.keys(props.answers).forEach((answerID) => listOfAnswers.push(props.answers[answerID]));
  const [amountOfAnswers, setAmountOfAnswers] = useState(2);
  const visibleAnswers = listOfAnswers.slice(0, amountOfAnswers);
  const [answerHelpfulnessClicked, setAnswerHelpfulnessClicked] = useState(false);
  const [reported, setReported] = useState('Report');

  const handleAnswerHelpfulness = () => {
    if (!answerHelpfulnessClicked) {
      setAnswerHelpfulnessClicked(true);
      setAnswerHelpfulnessRating(answerHelpfulnessRating + 1);
    } else {
      setAnswerHelpfulnessClicked(false);
      setAnswerHelpfulnessRating(answerHelpfulnessRating - 1);
    }
  };

  const handleReported = () => {
    if (!isReported) {
      setIsReported(true);
      setReported('Reported');
    } else {
      setIsReported(false);
      setReported('Report');
    }
  };

  const [isReported, setIsReported] = useState(false);
  const answers = visibleAnswers.map((answer) => {
    const answerDate = answer.date;
    const arrOfStringMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(answerDate);
    const stringOfDate = `${arrOfStringMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return (
      <div key={answer.id}>
        <strong>A:</strong> {answer.body}
        <p>
          <span>
            by {answer.answerer_name}, {stringOfDate} | Helpful?
            &nbsp;
            <UnderlinedButtons
              type="button"
              onClick={handleAnswerHelpfulness}
            >
              Yes
            </UnderlinedButtons>
            &nbsp;
            (
            {answer.helpfulness}
            )
            &nbsp;|&nbsp;
            <UnderlinedButtons
              type="button"
              onClick={handleReported}
            >
              {reported}
            </UnderlinedButtons>
          </span>
        </p>
      </div>
    );
  });

  return (
    <IndividualAnswerRow>
      <br />
      <span>
        {answers}
      </span>
      {listOfAnswers.length <= 2 ? null
        : amountOfAnswers === listOfAnswers.length ? (
          <p>
            <MoreAnswersButton
              type="button"
              onClick={() => setAmountOfAnswers(2)}
            >
              <strong>COLLAPSE ANSWERS</strong>
            </MoreAnswersButton>
          </p>
        ) : (
          <p>
            <MoreAnswersButton
              type="button"
              onClick={() => setAmountOfAnswers(listOfAnswers.length)}
            >
              <strong>LOAD MORE ANSWERS</strong>
            </MoreAnswersButton>
          </p>
        )}
      <hr />
    </IndividualAnswerRow>
  );
}
