/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
import React from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchBoxChange , requestRobots } from "../Actions";

const mapStateToProps = state => {
  return {
    SearchBoxChange: state.searchTheRobots.SearchBoxChange,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    UpdateSearchBox: (event) =>
      dispatch(setSearchBoxChange(event.target.value)),
      onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends React.Component {
 

  componentDidMount() {
   this.props.onRequestRobots();
  }

  render() {
    
    const { SearchBoxChange, UpdateSearchBox , onRequestRobots , isPending , robots} = this.props;
    const filtterRobot = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(SearchBoxChange.toLowerCase());
    });

    return isPending ? (
      <h1>loading</h1>
    ) : (
      <React.Fragment>
        <h1 className="search1 bg-warning">RoboFriends</h1>

        <SearchBox searchBoxChange={UpdateSearchBox} />

        <Scroll>
          <ErrorBoundry>
            <CardList robots={filtterRobot} />
          </ErrorBoundry>
        </Scroll>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
