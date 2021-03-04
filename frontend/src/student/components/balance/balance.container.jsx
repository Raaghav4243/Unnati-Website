import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { selectIsUserFeeAmountFetching } from '../../redux/fee-amount/fee-amount.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import Balance from './balance.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsUserFeeAmountFetching,
});

const BalanceContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Balance);

export default BalanceContainer;
