import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { selectIsUserFeeDetailsFetching } from '../../redux/fee-details/fee-details.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import PaymentHistory from './payment-history.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsUserFeeDetailsFetching,
});

const PaymentHistoryContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(PaymentHistory);

export default PaymentHistoryContainer;
