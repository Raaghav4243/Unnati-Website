// import React from 'react';

// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { fetchAllCoursesStartAsync } from '../../redux/courses/courses.actions';
// import { selectAllCourses } from '../../redux/courses/courses.selectors';

// class DemoPage extends React.Component {
//   componentDidMount() {
//     console.log('Component Mounted');
//     const { fetchAllCoursesStartAsync } = this.props;
//     // setTimeout(() => {
//     //   fetchAllCoursesStartAsync();
//     // }, 1000);
//     fetchAllCoursesStartAsync();
//     // console.log(this.props)
//   }

//   componentDidUpdate() {
//     console.log('Component updated');
//   }

//   render() {
//     console.log('Component rendered');
//     const { allCourses } = this.props;
//     console.log(allCourses);
//     return (
//       <div>
//         <h1>DEMO PAGE</h1>
//         {allCourses ? (
//           allCourses.map((course) => <h1>{course.subjectName}</h1>)
//         ) : (
//           <h2>Loading...</h2>
//         )}
//         {/* {allCourses.map((course) => (
//           <h1>{course.subjectName}</h1>
//         ))} */}
//       </div>
//     );
//   }
// }

// const mapStateToProps = createStructuredSelector({
//   allCourses: selectAllCourses,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchAllCoursesStartAsync: () => dispatch(fetchAllCoursesStartAsync()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(DemoPage);
