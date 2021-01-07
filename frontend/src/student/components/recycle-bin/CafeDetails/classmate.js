import React from 'react';
import { StudentNumber,ClassMate, Student} from './Cafe.Details.Styles';

const ClassOverview = (props) => {
  const { student_number } = props;
    return (
      <Student>
          <StudentNumber>{student_number}</StudentNumber>
          <ClassMate>Classmates</ClassMate>
      </Student>
    );
  }


export default ClassOverview;
