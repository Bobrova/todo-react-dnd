import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';
import TaskList from '../components/TaskList';
import { getcountActiveItem, isCheckedExists } from '../selectors';

const mapStateToProps = state => ({
  todoList: state.todoUsual,
  countActiveItem: getcountActiveItem(state),
  isCheckedExists: isCheckedExists(state),
  quicklyList: state.todoQuickly,
  usualList: state.todoUsual,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList);
