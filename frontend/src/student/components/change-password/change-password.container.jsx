import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { selectIsUserSigningIn } from '../../redux/user/user.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import ChangePassword from './change-password.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsUserSigningIn,
});

const ChangePasswordContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ChangePassword);

export default ChangePasswordContainer;
