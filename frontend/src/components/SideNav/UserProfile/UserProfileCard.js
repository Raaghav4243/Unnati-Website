import React from 'react'
import styled from 'styled-components'
import { selectCurrentUserFirstName, selectCurrentUserLastName } from '../../../redux/user/user.selectors'
import { ImgWrap, UserImage, UserName, UserProfile } from './UserProfile'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


class UserProfileCard extends React.Component{
    componentDidMount(){

    }
    render(){
        const {userFirstName, userLastName} = this.props;
    return(
        <UserProfile>
            <ImgWrap>
                <UserImage  />
            </ImgWrap>
            <UserName>Hi, {userFirstName} {userLastName}</UserName>
        </UserProfile>
    )
}
}

const mapStateToProps = createStructuredSelector({
    //allCourses: selectAllCourses,
    userFirstName: selectCurrentUserFirstName,
    userLastName: selectCurrentUserLastName
    //userCafe: selectUserCafeDetails,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    //fetchAllCoursesStartAsync: () => dispatch(fetchAllCoursesStartAsync()),
    //fetchUserCafeStartAsync: () => dispatch(fetchUserCafeStartAsync()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserProfileCard);
  