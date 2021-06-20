import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Search from './Search.jsx';
import ListOfQuestions from './ListOfQuestions.jsx';

const QuestionContainer = styled.div`
  color: #343a40;
  margin: 50px auto;
`;

export default function Question(props) {
  // const [ product, setProduct ] = useState({});
  const [questions, setQuestions] = useState([]);
  // console.log('question list:', sampleQuestionsList, 'answer list', sampleAnswersList.results);
  // const productID = '25168'; // hard ID for now, try to draw id located in App
  const productID = props.productID;

  useEffect(() => {
    axios.get(`/qa/questions/${productID}`)
      .then((response) => {
        // setProduct(response.data);
        setQuestions(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   axios.get(`/qa/questions/${productID}/answers`)
  //     .then((response) => {
  //       setArrOfAnswers(response.data.results); arrOfAnswers doesn't exist anymore
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <QuestionContainer>
      <p>QUESTIONS & ANSWERS</p>
      <Search />
      <ListOfQuestions questions={questions} />
    </QuestionContainer>
  );
};