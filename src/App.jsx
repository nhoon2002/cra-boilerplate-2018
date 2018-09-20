import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionsCreators from "./actions/userActions.js";

import Main from "./containers/Main.jsx";

const mapStateToProps = state => ({
  allData: state,
  sample: state.sampleReducer.result,
  fetchedData: state.sampleReducer.fetch,
  axiosData: state.sampleReducer.axios
  // ...state
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionsCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
