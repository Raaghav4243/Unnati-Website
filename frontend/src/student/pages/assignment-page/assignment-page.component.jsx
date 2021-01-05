import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SideNav from '../../components/SideNav/SideNav';
import { submitAssignmentStart } from '../../redux/assignment-page/assignment-page.actions';
import { fetchAssignmentStart } from '../../redux/assignment-page/assignment-page.actions';
import {
  selectAssignmentMessage,
  selectAssignmentQuestions,
} from '../../redux/assignment-page/assignment-page.selectors';
import {
  selectCurrentCourseId,
  selectCurrentCourseTopicId,
  selectCurrentCourseTopicName,
} from '../../redux/student/student.selectors';
import { selectCurrentUserId } from '../../redux/user/user.selectors';
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
import questionData from './data';

class AssignmentPage extends React.Component {
  constructor() {
    super();
    this.state = {
      resp: {},
      sahijawab: [],
      jawab: [],
      done: false,
       score: {marksScored: 0},
    };
  }

  componentDidMount() {
    console.log('Assignment Page has mounted');
    const user_id = this.props.current_user_id
    const course_id = this.props.current_course_id
    const assignment_id = this.props.current_assignment_id
    const {fetchAssignmentStart} = this.props
    fetchAssignmentStart({ user_id, course_id, assignment_id })

  }
  componentWillUnmount() {
    console.log('Assignment Page Will unmount now');
  }

  handleOnChange = (e) => {
    //console.log(e.target.value);
    //console.log(e.target.name);
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
        resp: response
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleClick = (e) => {
    e.preventDefault();
    const questionNumbers = questionData.assignment.questions.map(
      (number) => number.number
    );
    let responses = [];
    questionNumbers.forEach((questionNumber) => {
      let response = this.state.resp[questionNumber];
      responses.push(response);
    });
    console.log(responses);
    this.setState({ jawab: responses });
    const answers = questionData.assignment.questions.map(
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
      this.setState({ score: marks, done: true });
    };
    compareArray(responses, answers);
    console.log(this.state);

    let data = this.state.score
    console.log('page data',data)
    const {submitAssignmentStart} = this.props
    submitAssignmentStart(data)
  };

  render() {
    console.log('Assignment page has rendered');
    const { assignment_message, assignment_questions } = this.props;
    let i = -1;
    return (
      <>
        {this.state.done === false ?
          <AssignmentWrapper>
            {assignment_message ? (
              <div>MESSAGE FROM BACKEND {assignment_message}</div>
            ) : (
                <div>Loading...</div>
              )}
            {assignment_questions ? (
              <div>QUESTIONS RECEIVED</div>
            ) : (
                <div>Loading...</div>
              )}

            <WrappingQuestions>
              <AssignmentName>
                Assignment - 1 {questionData.assignment.assignmentName}
              </AssignmentName>

              <AssignmentForm onChange={(e) => this.handleOnChange(e)}>
                <AllQuestions>
                  {questionData.assignment.questions.map((question, number) => {
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
                                <Options>
                                  <input
                                    type='radio'
                                    key={question.statement}
                                    value={option}
                                    id={option}
                                    name={question.number}
                                  />
                                  <label key={index} htmlFor={option}>
                                    {option}
                                  </label>
                                  <br />
                                </Options>
                                <div></div>
                              </>
                            );
                          })}
                        </QuestionWrapper>
                      </>
                    );
                  })}
                </AllQuestions>
                <button onClick={(e) => this.handleClick(e)}>submit</button>
              </AssignmentForm>
            </WrappingQuestions>
          </AssignmentWrapper>
          :
          <>
            <div>
              {this.state.score ? (
                <div>your score is: {this.state.score}</div>
              ) : null}
            </div>
            <div>
              {this.state.jawab ? (
                <div>
                  {this.state.jawab.map((responses, index) => {
                    if (this.state.sahijawab[index] === responses) {
                      return (
                        <div>
                          <div>{questionData.assignment.questions[index].statement}</div>
                          <div>
                            {questionData.assignment.questions[index].options.map(
                              (option) => {
                                return <div>{option}</div>;
                              }
                            )}
                          </div>

                          {responses ? (
                            <div>
                              USER GAVE THE CORRECT ANSWER! User response:{' '}
                              {this.state.jawab[index]}, correct answer:{' '}
                              {this.state.sahijawab[index]}
                            </div>
                          ) : (
                              <div>
                                Unattempted, correct answer :
                                {this.state.sahijawab[index]}
                              </div>
                            )}
                        </div>
                      );
                    } else {
                      return (
                        <div>
                          <div>{questionData.assignment.questions[index].statement}</div>
                          <div>
                            {questionData.assignment.questions[index].options.map(
                              (option) => {
                                return <div>{option}</div>;
                              }
                            )}
                          </div>

                          {responses ? (
                            <div>
                              {' '}
                        USER GAVE WRONG ANSWER! User response is:{' '}
                              {this.state.jawab[index]}, correct answer:{' '}
                              {this.state.sahijawab[index]}
                            </div>
                          ) : (
                              <div>
                                Unattempted, correct answer :
                                {this.state.sahijawab[index]}
                              </div>
                            )}
                        </div>
                      );
                    }
                  })}
                </div>
              ) : null}
            </div>
          </>
        }



      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  current_assignment_id: selectCurrentCourseTopicId,
  current_assignment_name: selectCurrentCourseTopicName,
  current_user_id: selectCurrentUserId,
  current_course_id: selectCurrentCourseId,
  assignment_questions: selectAssignmentQuestions,
  assignment_message: selectAssignmentMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAssignmentStart: ({ user_id, course_id, assignment_id }) =>
  dispatch(fetchAssignmentStart({ user_id, course_id, assignment_id })),

  submitAssignmentStart: (data) => 
    dispatch(submitAssignmentStart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentPage);