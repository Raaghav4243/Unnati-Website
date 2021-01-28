import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../../student/components/with-spinner/with-spinner.component";
import { selectUnVerifiedStudentsIsFetching } from "../../redux/unverified-students/unverified-student.selectors";
import ApproveStudentTableComponent from './teacher-approve.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectUnVerifiedStudentsIsFetching
});

const ApproveStudentTableContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ApproveStudentTableComponent)

export default ApproveStudentTableContainer