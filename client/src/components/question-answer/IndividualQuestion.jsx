import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import IndividualAnswer from './IndividualAnswer.jsx';
import { sampleQuestionsList } from './sampleData.js';
import AddAnswerForm from './AddAnswerForm.jsx';

const IndividualQuestionRow = styled.div`
`;

export default function IndividualQuestion(props) {
  const question = props.question.question_body;
  const [helpfulness, setHelpfulness] = useState(props.question.question_helpfulness);
  const [yesClicked, toggleClicked] = useState(false);
  // need to modify this handleYesClick function to something that interacts with API
  const handleYesClick = () => {
    if (!yesClicked) {
      toggleClicked(true);
      setHelpfulness(helpfulness + 1);
    } else {
      toggleClicked(false);
      setHelpfulness(helpfulness - 1);
    }
  };

  return (
    <IndividualQuestionRow>
      <span>
        <strong>
          Q: {question}
        </strong>
      </span>
      <span>
        Helpful?
        <span
          role="button"
          onClick={() => handleYesClick()}
        >
          Yes
        </span> ({helpfulness}) | <AddAnswerForm /></span>
      <IndividualAnswer answers={props.question.answers} />
    </IndividualQuestionRow>
  );
};