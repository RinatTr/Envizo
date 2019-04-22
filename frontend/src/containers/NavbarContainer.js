import { connect } from 'react-redux';
import Navbar from '../Navbar'


const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}


export default connect (
  mapStateToProps,
  null
) (Navbar)
