import React from 'react';
import CafeOverview from '../../components/CafeDetails/CafeDetails';
import ClassOverview from '../../components/CafeDetails/classmate';
import Card from '../../components/EnrolledCourses/EnrolledCourses';
import DiscoverCard from '../../components/DiscoverCourses/DiscoverCourses';
import {
  HorizontalFlexBox,
  VerticleFlexBox,
  CafeDetail,
  CafeDetail1,
  CafeDetail2,
  VerticleFlexBox2,
  EnrolledCoursesWrapper,
} from '../../pages/student-dashboard/student.styles';

//libraries used
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//redux used
import { selectAllCourses } from '../../redux/courses/courses.selectors';
import { fetchAllCoursesStartAsync } from '../../redux/courses/courses.actions';
//components used

//styles used

class StudentDashboard extends React.Component {
  /*constructor(props) {
    super(props);

    this.state = {
      cafe_details: {
         cafe_name: 'XYZ School of Engineering',
        cafe_address: ' Bhavana Road, Samaypur Badli, New Delhi - 110001',
        faculty_incharge: 'Dr. Seema Singh',
        student_number: '24',
        course_percentage: '70',
       //course_name: 'MICROSOFT EXCEL ',
       },
       //cafe_details: this.props.allCourses,
    };
  }*/
  componentDidMount() {
    const { fetchAllCoursesStartAsync } = this.props;
    console.log('Component Mounted');
    fetchAllCoursesStartAsync();
  }

  render() {
    const { allCourses } = this.props;
    console.log(allCourses);
    /*const {
    cafe_name,
    cafe_address,
     faculty_incharge,
    student_number,
    course_percentage,
   //   course_name,
   } = this.state.cafe_details;*/
    console.log(this.props);
    return (
      <>
        <HorizontalFlexBox>
          <VerticleFlexBox>
            <CafeDetail>Cafe Details</CafeDetail>
            <CafeOverview
              cafe_name='bihi'
              cafe_address='hihi'
              faculty_incharge='hiji'
            />
          </VerticleFlexBox>
          <VerticleFlexBox>
            <CafeDetail1>You Have</CafeDetail1>
            <ClassOverview student_number='hihi' />
          </VerticleFlexBox>
        </HorizontalFlexBox>
        <VerticleFlexBox2>
          <CafeDetail2>Enrolled Course</CafeDetail2>
          <EnrolledCoursesWrapper>{allCourses ? (
            allCourses.map((course) => <Card course_name={course.subjectName} />)
          ) : (
              <h2>Loading...</h2>

            )}
            </EnrolledCoursesWrapper>

        </VerticleFlexBox2>
        <VerticleFlexBox2>
          <CafeDetail2>Discover More Courses</CafeDetail2>
          <EnrolledCoursesWrapper>
            {allCourses ? (
              allCourses.map((course) => <DiscoverCard course_name={course.subjectName} />)
            ) : (
                <h2>Loading...</h2>

              )}
            </EnrolledCoursesWrapper>
        </VerticleFlexBox2>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  allCourses: selectAllCourses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllCoursesStartAsync: () => dispatch(fetchAllCoursesStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
