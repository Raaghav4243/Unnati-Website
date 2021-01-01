import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import { hdiv } from './assignment-page.component';
import {
  QuestionWrapper,
  AssignmentWrapper,
  WrappingQuestions,
  AssignmentName,
  AssignmentForm,
  AllQuestions,
  Questions,
  Options,
} from './assignment-page.styles';
import data from './data';

class AssignmentPage extends React.Component {
  constructor() {
    super();
    this.state = {
      resp: {},
      score: 0,
      sahijawab: [],
      jawab: [],
    };
  }

  handleOnChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    // const responses = this.resp.push({name: [e.target.value]})
    //console.log(responses)
    //  this.setState({ selectedOption: e.target.value});
    //console.log(resp)
    const value = e.target.value;
    const name = e.target.name;
    let response = this.state.resp;
    response[name] = value;
    console.log(response);
    this.setState(
      {
        resp: response,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleClick = (e) => {
    e.preventDefault();
    const questionNumbers = data.assignment.questions.map(
      (number) => number.number
    );
    let responses = [];
    questionNumbers.forEach((questionNumber) => {
      let response = this.state.resp[questionNumber];
      responses.push(response);
    });
    console.log(responses);
    this.setState({ jawab: responses });
    const answers = data.assignment.questions.map(
      (answer) => answer.correctAns[0]
    );
    this.setState({ sahijawab: answers });
    console.log(answers);
    const compareArray = (a, b) => {
      let marks = 0;
      for (let i = 0; i < a.length; i++) {
        if (a[i] == b[i]) {
          marks = marks + 1;
        }
        //console.log(a[i], b[i])
      }
      console.log(marks);
      this.setState({ score: marks });
    };
    compareArray(responses, answers);
    console.log(this.state);
  };

  render() {
    const i = 0;
    return (
      <>
        <AssignmentWrapper>
          {/* <SideNav /> */}
          <WrappingQuestions>
            <AssignmentName>
              Assignment - 1 {data.assignment.assignmentName}
            </AssignmentName>

            <AssignmentForm onChange={(e) => this.handleOnChange(e)}>
              <AllQuestions>
                {data.assignment.questions.map((question, number) => {
                  //console.log(option)

                  return (
                    <>
                      <QuestionWrapper>
                        <Questions key={number}>
                          Q{question.number}) {question.statement}
                          <br />
                        </Questions>
                        {question.options.map((option, index) => {
                          //   console.log(option)
                          //console.log(number)
                          return (
                            <>
                              <Options key={index} htmlFor={question.number}>
                                <input
                                  type='radio'
                                  key={question.statement}
                                  value={option}
                                  id={option}
                                  name={question.number}
                                />
                                {option}
                              </Options>

                              <br />
                            </>
                          );
                        })}
                        {this.state.jawab ? (
                          <div>
                            Your response is:
                            {this.state.jawab[1]}
                          </div>
                        ) : null}
                      </QuestionWrapper>
                    </>
                  );
                })}
              </AllQuestions>
              <button onClick={(e) => this.handleClick(e)}>submit</button>
            </AssignmentForm>
          </WrappingQuestions>
        </AssignmentWrapper>
        <div>
          {this.state.score ? (
            <div>your score is: {this.state.score}</div>
          ) : null}
        </div>
        <div>
          {this.state.jawab ? (
            <div>
              {jawab.map(
                (userResponse = () => {
                  if (sahijawab[i++] === userResponse) {
                    return <div>USER GAVE CORRECT ANSWER!</div>;
                  } else {
                    return <div>USER GAVE WRONG ANSWER!</div>;
                  }
                })
              )}
            </div>
          ) : null}
        </div>
      </>
    );
  }
}

export default AssignmentPage;
