import React, { Component } from 'react';
import data from './data';
import Timer from 'react-compound-timer';
import { TestPageContainer } from './test-page.styles';

class TestPage extends Component {
  constructor() {
    super();
    this.state = {
      resp: {},
      quesResp: {},
      time: data.test.duration * 60 * 1000,
    };
  }

  componentDidMount() {}

  handleOnChange = (e) => {
    const { name, value, id } = e.target;

    let response = this.state.resp;
    console.log(name)
    const questionType = data.test.questions[id - 1].type;

    if (questionType === 'MULTICORRECT') {
      if (response[id] == undefined) {
        response[id] = [value];
      } else if (response[id].includes(value)) {
        let temp = response[id].filter((item) => {
          return item !== value;
        });
        response[id] = temp;
      } else {
        response[id].push(value);
      }
    } else {
      response[id] = [value];
    }

    console.log('resp', response);
    this.setState(
      {
        resp: response,
      },
      () => {
        console.log('state', this.state);
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let data = this.state.resp;
    let values = Object.values(data);
    console.log(values);
    // fetch("/login", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  handleQuestionSubmitOnChange = (e) => {
    e.preventDefault()
    const { name, value, id } = e.target;
    const questionResponse = this.state.quesResp
    questionResponse[id] = [value]
    this.setState(
      {
        quesResp: questionResponse,
      }
    )
  }

  handleQuestionSubmit = (e) => {
    e.preventDefault()
    // fetch("/submit-response/user/:userId/test/:testId/question/:questionId", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //  
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

  }

  render() {
    return (
      <>
        <TestPageContainer>
          <Timer initialTime={this.state.time} direction='backward'>
            {() => (
              <React.Fragment>
                <Timer.Hours />:
                <Timer.Minutes />:
                <Timer.Seconds />
              </React.Fragment>
            )}
          </Timer>
          <div>
            <div className='testame'>Test - 1 {data.test.testName}</div>

            <div
              type='submit'
              onChange={(e) => this.handleOnChange(e)}
              onSubmit={this.handleSubmit}
            >
              <div>
                {data.test.questions.map((question, number) => {
                  return (
                    <>
                      <form key={number}
                       onChange={this.handleQuestionSubmitOnChange}
                       onSubmit={this.handleQuestionSubmit}
                       >{question.statement}
                      {question.type === 'MULTICORRECT' ? (
                        <>
                          {question.options.map((option, index) => {
                            return (
                              <label key={index} htmlFor={option}>
                                <input
                                  type='checkbox'
                                  key={option}
                                  value={option}
                                  id={question.number}
                                  name={question._id}
                                />
                                {option} <br />
                              </label>
                            );
                          })}
                        </>
                        
                      ) : null}
                      
                      {question.type === 'SINGLECORRECT' ? (
                        <>
                          {question.options.map((option, index) => {
                            return (
                              <label key={index} htmlFor={option}>
                                <input
                                  type='radio'
                                  key={option}
                                  value={option}
                                  id={question.number}
                                  name={question._id}
                                />
                                {option} <br />
                              </label>
                            );
                          })}
                        </>
                      ) : null}
                      {question.type === 'TYPED' ? (
                        <>
                          <label htmlFor={number}>
                            <input
                              type='text'
                              id={question.number}
                              name={question._id}
                            />
                          </label>
                        </>
                      ) : null}
                      <button type='submit'>Submit question</button>
                      </form>
                    </>
                    
                  );
                })}
              </div>
              <button>submit</button>
            </div>
          </div>
        </TestPageContainer>
      </>
    );
  }
}

export default TestPage;
