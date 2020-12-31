//libraries used
import React from 'react';

//redux used

//components used

//styles used
import {} from './test-page.styles';

class TestPage extends React.Component {
  constructor() {
    super();

    this.state = {
      // received from backend
      done: true,
      test: {
        questions: [
          {
            options: ['opt1', 'opt2', 'opt3', 'opt4'],
            _id: '5fdaeba85aa95631647c4087',
            type: 'MULTICORRECT',
            name: 'dummy1',
            statement: 'statement1dummystatementdummystatementdummy',
            maxMarks: 10,
            __v: 0,
          },
          {
            options: [],
            _id: '5fdaebd25aa95631647c4088',
            type: 'TYPED',
            name: 'dummy1',
            statement: 'statement1dummystatementdummystatementdummy',
            maxMarks: 10,
            __v: 0,
          },
        ],
        _id: '5fdb07df5aa95631647c408c',
        subjectCode: 'T1012',
        subjectName: 'Dummy3',
        testName: 'dummytest12',
        duration: 45,
        maxMarks: 100,
        createdAt: '2020-12-17T07:25:19.016Z',
        __v: 0,
      },

      // set in front end
      currentQuestionNo: 0,
      single_choice_response: null,
      multipe_choice_response: [],
      typed_response: '',
    };
  }

  handleQuestionChange = (question_no) => {
    this.setState({ currentQuestionNo: question_no });
  };

  handleSingleChoiceResponse = (response) => {
    this.setState({ single_choice_response: response });
  };

  handleMultipleChoiceResponse = (response) => {
    this.setState({ multipe_choice_response: response });
  };

  handleTypedChoiceResponse = (response) => {};

  render() {
    const {
      test: { questions, subjectName, testName, duration },
      currentQuestionNo,
    } = this.state.test;

    const returnQuestionTypeComponent = () => {
      switch (questions[currentQuestionNo].type) {
        case 'SINGLECORRECT':
          return (
            <SingleCorrectTestCard
              q_no={currentQuestionNo}
              q_statement={questions[currentQuestionNo].statement}
              q_options={}
            />
          );
        case 'MULTICORRECT':
          return (
            <MultiCorrectTestCard
              q_no={currentQuestionNo}
              q_statement={questions[currentQuestionNo].statement}
            />
          );
        case 'TYPED':
          return (
            <TypedTestCard
              q_no={currentQuestionNo}
              q_statement={questions[currentQuestionNo].statement}
            />
          );
        default:
          return <div>No question here</div>;
      }
    };

    return (
      <TestPageContainer>
        <TestSideNav></TestSideNav>
        <TestMainPage>{returnQuestionTypeComponent()}</TestMainPage>
      </TestPageContainer>
    );
  }
}
