import Home from "../components/Home";
import { connect } from "react-redux";
import { fetchTonnage } from "../actions/DataActions";
import { fetchAllGoals } from '../actions/GoalsActions';

const mapStateToProps = (state, ownProps) => {
  return {
    tonnage: state.data.tonnage,
    goals: state.goals.goals
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTonnage: () => dispatch(fetchTonnage()),
    fetchAllGoals: () => dispatch(fetchAllGoals())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
