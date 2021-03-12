import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { selectIsUserSigningIn } from '../../redux/user/user.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import EditProfile from './edit-profile.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsUserSigningIn,
});

const EditProfileContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(EditProfile);

export default EditProfileContainer;
