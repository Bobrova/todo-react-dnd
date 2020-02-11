import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';
import Main from '../components/Main';
import { getCurrentId } from '../selectors';

const mapStateToProps = state => ({
  isOpen: state.todoUsual.length !== 0 || state.todoQuickly.length !== 0,
  currentId: getCurrentId(state),
  quicklyList: state.todoQuickly,
  usualList: state.todoUsual,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
