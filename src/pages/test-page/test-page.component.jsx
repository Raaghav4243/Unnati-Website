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
      currentQuestion: {
        q_id: 1,
        q_type: 'mcq',
        q_details: 'A sample question?',
        q_options: [],
      },
    };
  }
  render() {
    return (
      <TestPageContainer>
        <TestSideNav></TestSideNav>
      </TestPageContainer>
    );
  }
}
