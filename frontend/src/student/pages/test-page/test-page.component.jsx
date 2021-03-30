import React from 'react';
import { connect } from 'react-redux';

//redux
import TestContainer from './test.container';

import { fetchTestStart } from '../../redux/testpage/testpage.actions';

class TestPage extends React.Component {
  render() {
    return (
      <>
        <TestContainer />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTestStart: () => dispatch(fetchTestStart()),
});

export default connect(null, mapDispatchToProps)(TestPage);
