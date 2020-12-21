import React from 'react';
import CafeOverview from '../../components/CafeDetails/CafeDetails';
import ClassOverview from '../../components/CafeDetails/classmate';
import Card from '../../components/EnrolledCourses/EnrolledCourses';
import DiscoverCard from '../../components/DiscoverCourses/DiscoverCourses';
import { HorizontalFlexBox , VerticleFlexBox, CafeDetail, CafeDetail1, CafeDetail2,VerticleFlexBox2} from '../../pages/student-dashboard/student.styles';




class StudentDashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      cafe_details: {
        cafe_name: 'XYZ School of Engineering',
        cafe_address:' Bhavana Road, Samaypur Badli, New Delhi - 110001',
        faculty_incharge: 'Dr. Seema Singh',
        student_number: '24',
        course_percentage: '70',
        course_name: 'MICROSOFT EXCEL ', 
      },
    };
  }

  render() {
    const {
      cafe_name,
      cafe_address,
      faculty_incharge,
      student_number,
      course_percentage,
      course_name,
    } = this.state.cafe_details;
    return (
        <><HorizontalFlexBox>
        <VerticleFlexBox>
            <CafeDetail>Cafe Details</CafeDetail>
        <CafeOverview cafe_name={cafe_name} cafe_address={cafe_address} faculty_incharge={faculty_incharge }/></VerticleFlexBox>
    <VerticleFlexBox>
    <CafeDetail1>You Have</CafeDetail1>
    <ClassOverview student_number= {student_number}/>
    </VerticleFlexBox>
    </HorizontalFlexBox>
    <VerticleFlexBox2>
    <CafeDetail2>Enrolled Course</CafeDetail2>
    <Card course_percentage={course_percentage} course_name={course_name}/>

    </VerticleFlexBox2>
    <VerticleFlexBox2>
        <CafeDetail2>Discover More Courses</CafeDetail2>

        <DiscoverCard   course_name={course_name} />
    
    </VerticleFlexBox2>
    </>
        
        
    );
  }
}

export default StudentDashboard;