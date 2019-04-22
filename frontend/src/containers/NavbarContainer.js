import { connect } from 'react-redux';
import { logout, loadCurrent } from '../actions/AuthActions';
import Navbar from '../Navbar';


const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
    user: state.auth.currentUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    logout: () => dispatch(logout()),
    loadCurrent: () => dispatch(loadCurrent())
  };
};


export default connect (
  mapStateToProps,
  mapDispatchToProps
) (Navbar)
